const mongoose = require("mongoose");
const ContenedorMongoDb = require("../../contenedores/ContenedorMongoDB")
const usersModels = require('../../models/users.models')

let instancia = null;
class UsersDaoMongoDB extends ContenedorMongoDb {
    static getInstance() {
        if (!instancia) instancia = new UsersDaoMongoDB();
        return instancia;
    }
    constructor() {
        super(usersModels);
    }

    async getByUsername(username){
        try{
            const data = await this.collection.findOne({username:username})
            return data
        }
        catch(err){
            console.log(err)
        }
    }

}

module.exports = UsersDaoMongoDB;

