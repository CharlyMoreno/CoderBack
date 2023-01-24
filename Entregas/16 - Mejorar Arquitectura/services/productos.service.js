const ProductosDaoFactory = require("../daos/factory/productos.daoFactory");
const productosDao = ProductosDaoFactory.getDao();

const {asDto} = require('../dto/producto.dto')

const getAll = async () => {
    try{
        const productos = await productosDao.getAll();
        return asDto(productos);
    }
    catch(err){
        console.log(err);
    }
}

const save = async (product) => {
    try{
        const producto = await productosDao.save(product);
        return asDto(producto);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {getAll,save}