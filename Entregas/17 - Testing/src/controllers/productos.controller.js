const { getCurrentUser } = require('../middlewares/currentUser')
const productService = require('../services/productos.service')

const getProductos = async (req,res) =>{
    try{
        const productos = await productService.getAll();
        const user = await getCurrentUser(req.user);
        res.render('productos',{productos: productos, user: user})
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getProductos};