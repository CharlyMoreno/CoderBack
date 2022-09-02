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

            objetoASumar.id = data.length + 1
            data.push(objetoASumar)

            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(data,null,'\t'),'utf-8')
            console.log(`Elemento guardado correctamente con el id: ${objetoASumar.id}.`)
            return objetoASumar.id;
        }
        catch(err){
            console.log(err)
        }
    }

    //Recibe el id, lo busca en el archivo y retorna el objeto. Si no existe devuelve null.
    getById(id){

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

