import express from "express";
import { Router } from "express";
import { productosDao as productoApi } from "../../daos/selectDao.js";
import checkAdministrator from "../../auth/auth.js";
const router = Router()

router.use(express.json())

// GET ALL
router.get('/',async (req,res)=>{
    try{
        const productos = await productoApi.getAll();
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
        const producto = await productoApi.getById(req.params.id);
        res.json(producto)
        res.status(200)
    }
    catch(err){res.status(500)}
})

//POST --> Agregar producto
router.post('/',checkAdministrator,async (req,res)=>{
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
                await productoApi.save(producto)
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
router.put('/:id',checkAdministrator,async (req,res)=>{
    try{
        if(req.headers.administrator == "true"){
            const modificado = await productoApi.update(req.params.id,req.body)
            res.send(modificado)
            res.status(200)
        }
        else{
            res.send({"error":-1,"descripcion":`${req.baseUrl} y método ${req.method} no disponible para usuarios.`}) 
         }
    }
    catch(err){res.status(500)}
})

//DELETE --> Borrar producto
router.delete('/:id',checkAdministrator,async (req,res)=>{
    try{
        if(req.headers.administrator == "true"){
            await productoApi.deleteById(req.params.id)
            res.send('Remove Correcto')
            res.status(200)
        }
        else{
            res.send({"error":-1,"descripcion":`${req.baseUrl} y método ${req.method} no disponible para usuarios.`}) 
        }
    }
    catch(err){res.status(500)}
})

export default router;    