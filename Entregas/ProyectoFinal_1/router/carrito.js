const express = require('express');
const { Router } = express;
const router = Router()
const con = require('../persistencia/persistencia.js')
const c  = new con.Contenedor('./persistencia/carrito.txt');
const p  = new con.Contenedor('./persistencia/productos.txt');
router.use(express.json());


// GET CARRITO BY ID
router.get('/:id',async (req,res)=>{
    try{
        const carrito = await c.getById(req.params.id);
        if(!carrito) {
            res.status(404)
            res.send({"error":-1,"descripcion":`Carrito no encontrado.`})
        }
        else{
            res.status(200)
            res.json(carrito)
        }
            
    }
    catch(err){res.status(500)}
})

// GET PRODUCTOS DE CARRITO BY ID
router.get('/:id/productos',async (req,res)=>{
    try{
        const carrito = await c.getById(req.params.id);
        if(!carrito){
            res.status(404)
            res.send({"error":-1,"descripcion":`Carrito no encontrado.`})
        }
        else{
            res.status(200)
            res.json(carrito.productos)
        }
    }
    catch(err){res.status(500)}
})

//POST --> Agrega carrito
router.post('/',async (req,res)=>{
    try{
        let carrito = req.body;
        if(!carrito.timestamp){
            carrito.timestamp = new Date().toDateString();
        }
        const idNuevoCarrito = await c.save(carrito)
        res.status(201)    
        res.send(`Post Correcto - Carrito ID: ${idNuevoCarrito}`)
    }
    catch(err){res.status(500) }
})

//POST --> Agregar producto a carrito
router.post('/:id/productos/:id_prod',async (req,res)=>{
    try{
        let carrito = await c.getById(req.params.id)
        let producto = await p.getById(req.params.id_prod)
        if(!carrito || !producto){
            res.status(404) 
            res.send({"error":-1,"descripcion":`Carrito o producto no encontrado.`})
        }
        else{
            carrito.productos.push(producto)
            await c.update(carrito)
            res.status(201)    
            res.send(`Post Correcto - Carrito ID: ${req.params.id} se agrego ${req.params.id_prod}`)
        }
    }
    catch(err){res.status(500) }
})


//DELETE --> Borrar producto
router.delete('/:id/productos/:id_prod',async (req,res)=>{
    try{
        let carrito = await c.getById(req.params.id)
        if(carrito == undefined){
            res.status(404)
            res.send({"error":-1,"descripcion":`Carrito no encontrado.`})
        }
        else{
            const productoBuscado = carrito.productos.find(producto=>producto.id == req.params.id_prod)
            if(productoBuscado == undefined){
                res.status(404)
                res.send({"error":-1,"descripcion":`Producto no encontrado.`})
            }
            else{
                carrito.productos.splice(carrito.productos.indexOf(productoBuscado),1)
                await c.update(carrito)
                res.status(200)
                res.send('Remove Correcto')
            }
        }
    }
    catch(err){res.status(500)}
})

module.exports = router;    