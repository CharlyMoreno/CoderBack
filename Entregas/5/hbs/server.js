const express = require('express');
const app = express()
const PORT = process.env.PORT || 8080
const p = require('../persistencia/persistencia')

//HANDLEBARS 
const handlebars = require('express-handlebars');
const { application } = require('express');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: '.hbs'
}));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

// GET ALL
app.get('/',(req,res)=>{
    try{
        const productos = p.getAll();
        const listExist = productos.length > 0 ? true : false;
        res.render("home",{productos:productos,listExist:listExist})
    }
    catch(err){
        res.status(500)
    }
})

app.get('/create',(req,res) => {
    res.render("create",{productos:[],listExist:false})
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