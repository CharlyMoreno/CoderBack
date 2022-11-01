import { Router } from "express";
const router = Router()
import routerProd from "../router/v1/productos.js"
import routerCarrito from "../router/v1/carrito.js"

router.use('/v1/productos', routerProd)
router.use('/v1/carrito', routerCarrito)

export default router