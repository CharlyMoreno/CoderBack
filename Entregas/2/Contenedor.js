const fs = require('fs')

class Contenedor {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }

    //Recibe un objeto, lo guarda en el archivo y devuelve el id.
    async save(objetoASumar){
        try{
            let data = await this.getAll()
            data = JSON.parse(data)
            
            //Copio el arreglo de los productos
            let dataSorted = data
            //Los ordeno en forma ascendente segun sus id's.
            dataSorted = dataSorted.sort((a,b) => {return b.id - a.id})
            //Selecciono el id mas alto
            const maxId = dataSorted[0].id
            //Al id mas alto le sumo 1
            objetoASumar.id = maxId + 1
            
            //Agrego al arreglo original el objeto nuevo.
            data.push(objetoASumar)

            //Escribo el archivo. 
            //NOTA: No hay problema con el writeFile porque estoy escribiendo el array completo y no solamente el objeto nuevo.
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(data,null,'\t'),'utf-8')
            console.log(`Elemento guardado correctamente con el id: ${objetoASumar.id}.`)
            return objetoASumar.id;
        }
        catch(err){
            console.log(err)
        }
    }

    //Recibe el id, lo busca en el archivo y retorna el objeto. Si no existe devuelve null.
    async getById(id){
        try{
            let data = await this.getAll()
            data = JSON.parse(data)
            
            const objetoBuscado = data.find(x => x = id)
            return objetoBuscado
        }
        catch(err){
            console.log(err)
        }
    }

    //Devuelve todos los objetos.
    async getAll(){
        try{
            const contenido = await fs.promises.readFile(this.nombreArchivo,'utf-8')
            return contenido;
        }
        catch(err){
            console.log(err)
        }
    }

    //Borra solamente por el objeto que contenga el id.
    deleteById(id){}

    //Borra todos los objetos.
    deleteAll(){}
}

module.exports.Contenedor = Contenedor;

