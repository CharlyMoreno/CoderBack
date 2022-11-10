const express = require('express');
const { Router } = express;
const router = Router()
router.use(express.json());
const ProductosFaker = require('../faker/productos')

router.get('/:cant',(req,res)=>{
    try{
        const productos = ProductosFaker.generarAleatorios(req.params.cant);
        res.status(200).json(productos)
    }
    catch(err){
        res.status(500).send("Error")
    }
})

router.get('/',(req,res)=>{
    try{
        const productos = ProductosFaker.generarAleatorios(5);
        res.status(200).json(productos)
    }
    catch(err){
        res.status(500).send("Error")
    }
})



module.exports = router;  