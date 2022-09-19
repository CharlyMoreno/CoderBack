const express = require('express');
const { Router } = express;
const router = Router()
const p = require('./persistencia')

router.use(express.json());

// GET ALL
router.get('/',(req,res)=>{
    const productos = p.getAll();
    res.json(productos)
})

// GET BY ID
router.get('/:id',(req,res)=>{
    const producto = p.getById(req.params.id);
    res.json(producto);
})

//POST --> Agregar producto
router.post('/',(req,res)=>{
    p.addProducto(req.body)
    res.send('Post Correcto')
})

//PUT --> Actualizar producto
router.put('/:id',(req,res)=>{
    p.updateProducto(req.params.id,req.body)
    res.send('Put Correcto')
})

//DELETE --> Borrar producto
router.delete('/:id',(req,res)=>{
    p.removeProducto(req.params.id)
    res.send('Remove Correcto')
})

module.exports = router;    