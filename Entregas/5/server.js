const express = require('express');

const app = express()

const PORT = process.env.PORT || 8080
const p = require('./persistencia/persistencia')

//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: '.hbs'
}));


app.use(express.static('public'));

// GET ALL
app.get('/',(req,res)=>{
    try{
        const productos = p.getAll();
        res.render("home",{productos:productos,listExist:false})
    }
    catch(err){
        res.status(500)
    }

})

// GET BY ID
app.get('/:id',(req,res)=>{
    try{
        const producto = p.getById(req.params.id);
        res.json(producto)
        res.status(200)
    }
    catch(err){res.status(500)}
})

//POST --> Agregar producto
app.post('/',(req,res)=>{
    try{
        p.addProducto(req.body)
        res.send('Post Correcto')
        res.status(201)    
    }
    catch(err){res.status(500) }
})

//PUT --> Actualizar producto
app.put('/:id',(req,res)=>{
    try{
        p.updateProducto(req.params.id,req.body)
        res.send('Put Correcto')
        res.status(200)
    }
    catch(err){res.status(500)}
})

//DELETE --> Borrar producto
app.delete('/:id',(req,res)=>{
    try{
        p.removeProducto(req.params.id)
        res.send('Remove Correcto')
        res.status(200)
    }
    catch(err){res.status(500)}
})













const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));