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
}

module.exports = ProductosDaoMongoDB;

