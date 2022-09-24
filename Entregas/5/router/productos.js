const express = require('express');
const { Router } = express;
const router = Router()

router.use(express.json());

const p = require('../persistencia/persistencia')
// GET ALL
router.get('/',(req,res)=>{
    try{
        const productos = p.getAll();
        res.json(productos)
        res.status(200)
    }
    catch(err){
        res.status(500)
    }

})

// GET BY ID
router.get('/:id',(req,res)=>{
    try{
        const producto = p.getById(req.params.id);
        res.json(producto)
        res.status(200)
    }
    catch(err){res.status(500)}
})

//POST --> Agregar producto
router.post('/',(req,res)=>{
    try{
        p.addProducto(req.body)
        res.send('Post Correcto')
        res.status(201)    
    }
    catch(err){res.status(500) }
})

//PUT --> Actualizar producto
router.put('/:id',(req,res)=>{
    try{
        p.updateProducto(req.params.id,req.body)
        res.send('Put Correcto')
        res.status(200)
    }
    catch(err){res.status(500)}
})

//DELETE --> Borrar producto
router.delete('/:id',(req,res)=>{
    try{
        p.removeProducto(req.params.id)
        res.send('Remove Correcto')
        res.status(200)
    }
    catch(err){res.status(500)}
})

module.exports = router;    