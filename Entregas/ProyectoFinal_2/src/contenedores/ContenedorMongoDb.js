import mongoose from "mongoose";
import config from "../config/config.js";


// Set up default mongoose connection
const mongoDB = config.mongoDb.connectionString;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));


class ContenedorMongoDb{
    constructor(schemaDB){
        this.collection = schemaDB;
    }

    async getAll(){
        try{
            const data = await this.collection.find();
            return data;
        }
        catch(err){
            console.log(err)
        }
    }

    async getById(id){
        try{
            const data = await this.collection.findOne({_id:id})
            return data
        }
        catch(err){
            console.log(err)
        }
    }

    async save(objeto) {
        try{
            const doc = await this.collection.create(objeto);
            return doc; 
        }
        catch(err){
            console.log(err)
        }
    }

    async update(id, newObject) {
        try{
            const objetoBuscado = await this.getById(id)
            if(!objetoBuscado){
                return false //No encontrado
            }
            else{
                console.log(newObject)
                const data = await this.collection.findByIdAndUpdate(id,newObject);
                return data;
            }
        }
        catch(err){
            console.log(err)
        }
      }
    
    async deleteById(id){
        try{
            const objetoBuscado = await this.getById(id)
            if(!objetoBuscado){
                return false //No encontrado
            }
            else{
                await this.collection.findByIdAndDelete(id);
                return true; // Eliminado correctamente
            }
        }
        catch(err){
            console.log(err)
        }
    }



    }


export {ContenedorMongoDb};