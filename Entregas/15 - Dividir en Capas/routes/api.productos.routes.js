const { Router } = require('express')
const productosRouter = Router()

const {getAllProducts,saveProduct} = require('../controllers/api.productos.controller')

productosRouter.get('/',getAllProducts)

productosRouter.post('/',saveProduct)

module.exports = productosRouter;