import express from "express";
import mongoose from "mongoose"

const app = express()
const PORT = process.env.PORT || 8080


// Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1:27017/ecommerce_2";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));


const Schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        max: 100
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
        max: 500
    },
    codigo: {
        type: String,
        required: true,
        max: 6,
        unique: true
    },
    foto: {
        type: String,
        max: 200
    },
    stock: {
        type: Number,
        required: true,
        max: 5000
    }
})

const ProductosModel = mongoose.model("productos", Schema)


app.use(express.json())
app.use(express.static('public'));

app.get('/',async (req,res) =>{
    const data = await ProductosModel.find()
    res.send(data)
})

const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));