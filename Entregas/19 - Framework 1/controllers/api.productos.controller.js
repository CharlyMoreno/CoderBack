const productService = require('../services/productos.service')

const getAllProducts = async (ctx) => {
    try{
        const productos = await productService.getAll();
        ctx.body = {
            status:200,
            productos
        }
    }
    catch(err){
        console.log(err)
    }
}

const saveProduct = async (ctx) => {
    try{
        const productoObject = ctx.request.body;
        const productoId = await productService.save(productoObject);
        ctx.body = {
            status:200,
            productoId
        }
    }
    catch(err){
        console.log(err)
    }
}
const getProductById = async (ctx) => {
    try{
        if(ctx.params.id){
            const producto = await productService.getById(ctx.params.id);
            if(producto) ctx.body = {status:200,producto};
            else{
                ctx.response.status = 404;
                ctx.body = {"error":"Producto not found."}
            } 
        }
        else{
            ctx.response.status = 404;
            ctx.body = {"error":"Debe ingresar un id válido."}
        }
    }
    catch(err){
        console.log(err)
    }
}

const updateProduct = async (ctx) => {
    try{
        if(ctx.params.id && ctx.request.body){
            const producto = await productService.update(ctx.params.id,ctx.request.body);
            if(producto) ctx.body = {status:200,producto};
            else{
                ctx.response.status = 404;
                ctx.body = {"error":"Producto not found."}
            } 
        }
        else{
            ctx.response.status = 404;
            ctx.body = {"error":"Debe ingresar un id y un body válido."}
        }
    }
    catch(err){
        console.log(err)
    }
}

const deleteProductById = async (ctx) => {
    try{
        if(ctx.params.id){
            const producto = await productService.deleteById(ctx.params.id);
            if(producto) ctx.body = {status:200,producto};
            else{
                ctx.response.status = 404;
                ctx.body = {"error":"Producto not found."}
            } 
        }
        else{
            ctx.response.status = 404;
            ctx.body = {"error":"Debe ingresar un id válido."}
        }
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getAllProducts,saveProduct,getProductById,updateProduct,deleteProductById}