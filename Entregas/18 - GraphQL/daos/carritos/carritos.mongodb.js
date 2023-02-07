const mongoose = require("mongoose");
const ContenedorMongoDb = require("../../contenedores/ContenedorMongoDB")
const carritosModel = require('../../models/carritos_models')


const {asDto} = require('../../dto/carrito.dto')

let instancia = null;
class CarritoDaoMongoDB extends ContenedorMongoDb {
    static getInstance(){
        if(!instancia) instancia = new CarritoDaoMongoDB();
        return instancia;
    }
    constructor() {
        super(carritosModel);
    }

    async getCarritoByUser(user){
        try{
            const data = await this.collection.findOne({user:user})
            return data
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = CarritoDaoMongoDB;

