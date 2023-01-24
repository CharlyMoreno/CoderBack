const productService = require('../services/productos.service')

const getAllProducts = async (req,res) => {
    try{
        const productos = await productService.getAll();
        res.status(200).json(productos);
    }
    catch(err){
        console.log(err)
    }
}

const saveProduct = async (req,res) => {
    try{
        const productoObject = req.body;
        const productoId = await productService.save(productoObject);
        res.status(200).json(productoId);
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getAllProducts,saveProduct}