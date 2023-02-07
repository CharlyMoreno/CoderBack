const ContenedorMongoDb = require("../../contenedores/ContenedorMongoDB")
const paisesModels = require('../../models/paises.models')

let instancia = null;
class PaisesDaoMongoDB extends ContenedorMongoDb {
    static getInstance(){
        if(!instancia) instancia = new PaisesDaoMongoDB();
        return instancia;
    }
    constructor() {
        super(paisesModels);
    }
}

module.exports = PaisesDaoMongoDB;

