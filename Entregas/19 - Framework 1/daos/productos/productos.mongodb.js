const mongoose = require("mongoose");
const ContenedorMongoDb = require("../../contenedores/ContenedorMongoDB")
const productosModels = require('../../models/productos_models')

let instancia = null;
class ProductosDaoMongoDB extends ContenedorMongoDb {
    static getInstance(){
        if(!instancia) instancia = new ProductosDaoMongoDB();
        return instancia;
    }
    constructor() {
        super(productosModels);
    }

    async getByNombre(nombre){
        try{
            const data = await this.collection.findOne({nombre:nombre})
            return data
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = ProductosDaoMongoDB;

