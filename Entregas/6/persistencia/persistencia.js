const fs = require('fs')

class Contenedor {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }

    //Devuelve todos los objetos.
    async getAll(){
        try{
            let contenido = await fs.promises.readFile(this.nombreArchivo,'utf-8')
            contenido = JSON.parse(contenido)
            contenido = contenido.sort((a,b) => {return a.id - b.id})
            return contenido;
        }
        catch(err){
            console.log(err)
        }
    }
    //Recibe un objeto, lo guarda en el archivo y devuelve el id.
    async save(objetoASumar){
        try{
            let data = await this.getAll()
            if (data.length == 0) objetoASumar.id = 1
            else {
                //Si ya existen ID entonces buscaré el más grande y a ese le sumo uno, más que nada por si se saltean id's después no ocurran problemas.

                //Copio el arreglo de los productos
                let dataSorted = data
                //Los ordeno en forma ascendente segun sus id's.
                dataSorted = dataSorted.sort((a,b) => {return b.id - a.id})
                //Selecciono el id mas alto
                const maxId = dataSorted[0].id
                //Al id mas alto le sumo 1
                objetoASumar.id = maxId + 1 
            }
            //Agrego al arreglo original el objeto nuevo.
            data.push(objetoASumar)
            //Escribo el archivo. 
            //NOTA: No hay problema con el writeFile porque estoy escribiendo el array completo y no solamente el objeto nuevo.
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(data,null,'\t'),'utf-8')
        }
        catch(err){
            console.log(err)
        }
    }

}

module.exports.Contenedor = Contenedor;
