const { getCurrentUser } = require("../middlewares/currentUser");

const carritoServicio = require('../services/carrito.service')

const getCarrito = async (req, res) => {
  try {
    const currentUser = await req.user;
    const carrito = await carritoServicio.getCarritoByUser(currentUser)
    const currentUserUI = await getCurrentUser(currentUser);
    res.render("carrito", { carrito: carrito, user: currentUserUI });
  } catch (err) {
    console.log(err);
  }
};

const getAddProduct = async (req, res) => {
  try {
    const currentUser = await req.user;
    await carritoServicio.addProduct(currentUser,req.params.id)
    res.redirect("/carrito");
  } catch (err) {
    console.log(err);
  }
};

const getDeleteProduct = async (req, res) => {
  try {
    const currentUser = await req.user;
    await carritoServicio.deleteProduct(currentUser,req.params.id)
    res.redirect("/carrito");
  } catch (err) {
    console.log(err);
  }
};

const getComprar = async (req, res) => {
  try {
    const currentUser = await req.user;
    await carritoServicio.confirmarCompra(currentUser)
    const currentUserUI = await getCurrentUser(currentUser);
    res.render("confirmarCompra", { user: currentUserUI });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {getCarrito, getAddProduct, getDeleteProduct, getComprar}