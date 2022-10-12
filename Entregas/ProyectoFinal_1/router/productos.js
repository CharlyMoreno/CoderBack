const express = require('express');
const { Router } = express;
const router = Router()
const con = require('../persistencia/persistencia.js')
const p  = new con.Contenedor('./persistencia/productos.txt');

router.use(express.json());

// GET ALL
router.get('/',async (req,res)=>{
    try{
        const productos = await p.getAll();
        res.json(productos)
        res.status(200)
    }
    catch(err){
        res.status(500)
    }

})

// GET BY ID
router.get('/:id',async (req,res)=>{
    try{
        const producto = await p.getById(req.params.id);
        res.json(producto)
        res.status(200)
    }
    catch(err){res.status(500)}
})

//POST --> Agregar producto
router.post('/',async (req,res)=>{
    try{
        console.log(req.baseUrl)
        if(req.headers.administrator == "true"){
            await p.save(req.body)
            res.send('Post Correcto')
            res.status(201)    
        }
        else{
           res.send({"error":-1,"descripcion":`${req.baseUrl} y método ${req.method} no disponible para usuarios.`}) 
        }
    }
    catch(err){res.status(500) }
})

//PUT --> Actualizar producto
router.put('/:id',async (req,res)=>{
    try{
        if(req.headers.administrator == "true"){
            await p.update(req.params.id,req.body)
            res.send('Put Correcto')
            res.status(200)
        }
        else{
            res.send({"error":-1,"descripcion":`${req.baseUrl} y método ${req.method} no disponible para usuarios.`}) 
         }
    }
    catch(err){res.status(500)}
})

//DELETE --> Borrar producto
router.delete('/:id',async (req,res)=>{
    try{
        if(req.headers.administrator == "true"){
            await p.deleteById(req.params.id)
            res.send('Remove Correcto')
            res.status(200)
        }
        else{
            res.send({"error":-1,"descripcion":`${req.baseUrl} y método ${req.method} no disponible para usuarios.`}) 
        }
    }
    catch(err){res.status(500)}
})

module.exports = router;    