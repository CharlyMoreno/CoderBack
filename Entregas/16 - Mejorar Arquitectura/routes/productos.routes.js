const { Router } = require('express')
const productosRouter = Router()
const { authMiddleware } = require('../middlewares/auth.middleware')

const {getProductos} = require('../controllers/productos.controller')


productosRouter.get('/',authMiddleware,getProductos)

module.exports = { 
    productosRouter 
}