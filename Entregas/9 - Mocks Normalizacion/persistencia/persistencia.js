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
            return contenido;
        }
        catch(err){
            console.log(err)
        }
    }

    async getJSON(){
        try{
            let contenido = await fs.promises.readFile(this.nombreArchivo,'utf-8')
            return contenido;
        }
        catch(err){
            console.log(err)
        }
    }
    
    async addMensaje(objetoASumar){
        try{
            let datos = await this.getAll()
            let data = datos.messages
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
            datos.messages = data
            //Escribo el archivo. 
            //NOTA: No hay problema con el writeFile porque estoy escribiendo el array completo y no solamente el objeto nuevo.
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(datos,null,'\t'),'utf-8')
            return objetoASumar.id
        }
        catch(err){

        }
    }
}

module.exports = Contenedor;
