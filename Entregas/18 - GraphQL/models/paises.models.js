const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
        "nombre": {type:String},
        "name": {type:String},
        "nom": {type:String},
        "iso2": {type:String},
        "iso3": {type:String},
        "phone_code": {type:String}   
})

const PaisesModel = mongoose.model("paises", Schema)

module.exports = PaisesModel;