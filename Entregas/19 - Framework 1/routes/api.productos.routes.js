const Router = require('koa-router')
const productosRouter = new Router({
    prefix: '/api/productos'
})

const {getAllProducts,saveProduct,getProductById,updateProduct,deleteProductById} = require('../controllers/api.productos.controller')

productosRouter.get('/',getAllProducts)

productosRouter.post('/',saveProduct)

productosRouter.get('/:id',getProductById)

productosRouter.put('/:id',updateProduct)

productosRouter.delete('/:id',deleteProductById)

module.exports = productosRouter;