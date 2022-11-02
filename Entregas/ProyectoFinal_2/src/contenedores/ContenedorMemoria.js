import fs from "fs";

const carritos = [{
    "timestamp": "Tue Oct 11 2022",
    "id": 3,
    "productos": []
}]
const productos = [{
    "timestamp": "Tue Oct 11 2022",
    "nombre": "Disco Sólido SSD Adata 240GB",
    "descripcion": "Disco descripcion bla bla bla.",
    "codigo": "AAA-111",
    "precio": "4620",
    "stock": 1,
    "foto": "https://acortar.link/InFFer",
    "id": 6
},
{
    "timestamp": "Tue Oct 11 2022",
    "nombre": "Disco Sólido SSD Adata 240GB",
    "descripcion": "Disco descripcion bla bla bla.",
    "codigo": "",
    "precio": "4620",
    "stock": 100,
    "foto": "https://acortar.link/InFFer",
    "id": 5
}]

class ContenedorMemoria {
    constructor(tipoArray){
        if(tipoArray == "carrito"){
            this.array = carritos
        }
        else if(tipoArray =="producto"){
            this.array = productos
        }
    }

    //Devuelve todos los objetos.
    async getAll(){
        try{
            let contenido = this.array
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

            this.array = data
            return objetoASumar.id
        }
        catch(err){
            console.log(err)
        }
    }

    //Recibe el id, lo busca en el archivo y retorna el objeto. Si no existe devuelve null.
    async getById(id){
        try{
            let data = await this.getAll()
            //Busco el objeto en el array de prodcutos compraando por el id.
            const objetoBuscado = data.find(x => x.id == id)

            return objetoBuscado
        }
        catch(err){
            console.log(err)
        }
    }

    //Borra solamente por el objeto que contenga el id.
    async deleteById(id){
        try{
            let data = await this.getAll()
            data = JSON.parse(data)

            //Busco el objeto en el array de prodcutos comprando por el id.
            const objetoBuscado = data.find(x => x.id == id)
            //Busco el indice que tiene el objeto buscado en el array
            const indexObjeto = data.indexOf(objetoBuscado)
            //Elimino el objeto que se encuentra en la posicion del array buscada anteriormente.
            data.splice(indexObjeto,1)

            //Escribo el archivo. 
            this.array = data
            console.log(`Elemento eliminado correctamente con el id: ${objetoBuscado.id}.`)

        }
        catch(err){
            console.log(err)
        }
    }

    //Borra todos los objetos del archivo. Pero NO borra el archivo
    async deleteAll(){
        try{
            const data = []
            //Escribo el archivo. 
            this.array = data
            console.log('Se eliminaron todos los objetos Correctamente.')
        }
        catch(err){
            console.log(err)
        }
    }

    async update(objetoActualizar) {
        try{
            let data = await this.getAll()
            //Busco el objeto en el array de prodcutos compraando por el id.
            const objetoBuscado = data.find(x => x.id == objetoActualizar.id)
            const indiceActual = data.indexOf(objetoBuscado)
            data[indiceActual] = objetoActualizar
            //Escribo el archivo. 
            //NOTA: No hay problema con el writeFile porque estoy escribiendo el array completo y no solamente el objeto nuevo.
            this.array = data
        }
        catch(err){

        }
    }    
}

export {ContenedorMemoria};
