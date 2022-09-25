const express = require('express');
const app = express()
const PORT = process.env.PORT || 8080
const p = require('../persistencia/persistencia')

//EJS
app.set('views','./views');
app.set('view engine', 'ejs')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

// GET ALL
app.get('/',(req,res)=>{
    try{
        const productos = p.getAll();
        const listExist = productos.length > 0;
        res.render('pages/index.ejs',{productos:productos,listExist:listExist})
    }
    catch(err){
        res.status(500)
    }
})

app.get('/create',(req,res) => {
    res.render("pages/create.ejs",{})
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