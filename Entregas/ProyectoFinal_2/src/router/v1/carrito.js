import express from "express";
import { Router } from "express";
import { carritosDao as carritoApi } from "../../daos/selectDao.js";
const router = Router()

router.use(express.json())


// GET CARRITO BY ID
router.get('/:id',async (req,res)=>{
    try{
        const carrito = await carritoApi.getById(req.params.id);
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
        const productos = await carritoApi.getProductsByCartId(req.params.id);
        res.send(productos)
    }
    catch(err){res.status(500)}
})

//POST --> Agrega carrito
router.post('/',async (req,res)=>{
    try{
        const newCart = await carritoApi.newCart(req.body)
        res.status(201)    
        res.send(`Post Correcto`)
    }
    catch(err){res.status(500) }
})

//POST --> Agregar producto a carrito
router.post('/:id/productos/:id_prod',async (req,res)=>{
    try{
        // const carritoUpdated = await carritoApi.addProduct(req.params.id , req.body)
        const carritoUpdated = await carritoApi.addProductByIdCart(req.params.id , req.params.id_prod)
        res.send(carritoUpdated)
    }
    catch(err){res.status(500) }
})


//DELETE --> Borrar producto
router.delete('/:id/productos/:id_prod',async (req,res)=>{
    try{
        const carritoUpdated = await carritoApi.deleteProductByIdCart(req.params.id , req.params.id_prod)
        res.send(carritoUpdated)
    }
    catch(err){res.status(500)}
})

export default router;    