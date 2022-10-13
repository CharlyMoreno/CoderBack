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
        if(req.headers.administrator == "true"){
            
            if(!req.body.nombre) res.send({"error":-1,"descripcion":`Debe ingresar un nombre.`})
            else if(!req.body.descripcion) res.send({"error":-1,"descripcion":`Debe ingresar una descripcion.`})
            else if(!req.body.codigo) res.send({"error":-1,"descripcion":`Debe ingresar un codigo.`})
            else if(!req.body.precio) res.send({"error":-1,"descripcion":`Debe ingresar un precio.`})
            else if(!req.body.stock) res.send({"error":-1,"descripcion":`Debe ingresar un stock.`})
            else if(!req.body.foto) res.send({"error":-1,"descripcion":`Debe ingresar una foto.`})
            else if(req.body.length > 1) res.send({"error":-1,"descripcion":`Enviar solamente un producto.`}) 
            else{
                const producto = 
                {
                    "timestamp":req.body.timestamp == undefined ? new Date().toDateString() : req.body.timestamp ,
                    "nombre": req.body.nombre,
                    "descripcion": req.body.descripcion,
                    "codigo": req.body.codigo,
                    "precio": req.body.precio,
                    "stock": req.body.stock,
                    "foto": req.body.foto
                }
                await p.save(producto)
                res.send('Post Correcto')
                res.status(201)    
            }
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