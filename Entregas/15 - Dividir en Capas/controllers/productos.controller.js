const { getCurrentUser } = require('../middlewares/currentUser')
const {getListDtoProductos} = require('../dto/producto.dto')

const productService = require('../services/productos.service')

const getProductos = async (req,res) =>{
    try{
        const productos = await productService.getAll();
        const productosData = getListDtoProductos(productos);
        const user = await getCurrentUser(req.user);
        res.render('productos',{productos: productosData, user: user})
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getProductos};