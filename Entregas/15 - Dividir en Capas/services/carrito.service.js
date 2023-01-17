const CarritoDaoMongoDB = require("../daos/carritos.mongodb");
const carritoDao = new CarritoDaoMongoDB();

const ProductosDaoMongoDb = require("../daos/productos.mongodb");
const productosDao = new ProductosDaoMongoDb();

const { sendEmail } = require("../mensajes/email");
const { templateEmailCompra } = require("../templates/templateEmailCompra");

const { sendWhatsapp } = require("../mensajes/whatsapp");
const { templateWhatsapp } = require("../templates/templateWhatsapp");


const confirmarCompra = async (currentUser) => {
    const carrito = await carritoDao.getCarritoByUser(currentUser);
    if (carrito) {
      //Envia el email
      const info = await sendEmail(templateEmailCompra(carrito, currentUser),currentUser);
      //Envia el whatsapp
      const infoWhatsapp = await sendWhatsapp(templateWhatsapp(carrito, currentUser));
      //Elimina carrito
      const carritoDeleted = await carritoDao.deleteById(carrito._id);
    }
}

const deleteProduct = async (currentUser,idProduct) => {
    const carrito = await carritoDao.getCarritoByUser(currentUser);
    if (carrito && idProduct) {
      const producto = await productosDao.getById(idProduct);
      const indexObjeto = carrito.productos.indexOf(producto);
      carrito.productos.splice(indexObjeto, 1);
      const carritoUpdated = await carritoDao.update(carrito._id, carrito);
    }
}

const addProduct = async (currentUser,idProduct) =>{
    const carrito = await carritoDao.getCarritoByUser(currentUser);
    if (carrito && idProduct) {
      const producto = await productosDao.getById(idProduct);
      carrito.productos.push(producto);
      const carritoUpdated = await carritoDao.update(carrito.id, carrito);
    }
}

const getCarritoByUser = async (currentUser) =>{
    let carrito = await carritoDao.getCarritoByUser(currentUser);
    if (!carrito) {
      const carritoNew = {
        timestamp: new Date(),
        productos: [],
        user: currentUser,
      };
      carrito = await carritoDao.save(carritoNew);
    }
    return carrito;
} 

module.exports = {confirmarCompra,getCarritoByUser,addProduct,deleteProduct}