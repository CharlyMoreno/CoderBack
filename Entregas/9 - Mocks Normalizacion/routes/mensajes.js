const express = require('express');
const { Router } = express;
const router = Router()
router.use(express.json());
const Normalizador = require('../normalizr/mensajes')
const Contenedor = require('../persistencia/persistencia')
const p = new Contenedor('./persistencia/mensajes.json');


router.get('/normalize',async (req,res)=>{
    try{
        const mensajesData = await p.getAll()
        const mensajesNormalizados = Normalizador.normalizar(mensajesData)
        res.status(200).json(mensajesNormalizados)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Error")
    }
})

router.get('/compresion',async(req,res)=>{
    try{
        const mensajesData = await p.getAll()
        const mensajesNormalizados = Normalizador.normalizar(mensajesData)
        const tamanioOriginal = JSON.stringify(mensajesData).length
        const tamanioComprimido = JSON.stringify(mensajesNormalizados).length
        const porcentaje = Math.trunc((tamanioOriginal - tamanioComprimido) * 100 / tamanioOriginal)
        res.status(200).json({"porcentaje":porcentaje})
    }
    catch(err){
        res.status(500).send("Error")
    }
})

router.post('/',async (req,res)=>{
    try{
        await p.addMensaje(req.body)
        res.status(200).send('Post Correct')
        console.log('Correcto')
    }
    catch(err){
        res.status(500).send("Error")
        console.log(err)
    }
})


module.exports = router;  