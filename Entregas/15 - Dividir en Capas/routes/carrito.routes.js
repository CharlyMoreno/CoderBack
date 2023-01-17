const { Router } = require("express");
const carritoRouter = Router();
const { authMiddleware } = require("../middlewares/auth.middleware");

const {getCarrito, getAddProduct, getDeleteProduct, getComprar} = require('../controllers/carrito.controller')

carritoRouter.get("/", authMiddleware, getCarrito);

carritoRouter.get("/addProduct/:id", authMiddleware, getAddProduct);

carritoRouter.get("/deleteProduct/:id", authMiddleware, getDeleteProduct);

carritoRouter.get("/comprar", authMiddleware, getComprar);

module.exports = {
  carritoRouter,
};
