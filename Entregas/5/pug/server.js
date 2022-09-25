const express = require('express');
const app = express()
const PORT = process.env.PORT || 8080
const p = require('../persistencia/persistencia')

//PUG
const pug = require('pug');
app.set('views','./views');
app.set('view engine', 'pug')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

// GET ALL
app.get('/',(req,res)=>{
    try{
        const productos = p.getAll();
        const listExist = productos.length > 0;
        res.render('index.pug',{productos:productos,listExist:listExist})
    }
    catch(err){
        res.status(500)
    }
})

app.get('/create',(req,res) => {
    res.render("create",{})
})


//POST --> Agregar producto
app.post('/',(req,res)=>{
    try{
        p.addProducto(req.body)
        res.redirect('/')
        res.status(201)    
    }
    catch(err){res.status(500) }
})


const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));