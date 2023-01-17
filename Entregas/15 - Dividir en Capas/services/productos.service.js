const ProductosDaoMongoDb = require('../daos/productos.mongodb')
const productosDao = new ProductosDaoMongoDb();

const getAll = async () => {
    try{
        const productos = await productosDao.getAll();
        return productos;
    }
    catch(err){
        console.log(err);
    }
}

const save = async (product) => {
    try{
        const producto = await productosDao.save(product);
        return producto;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {getAll,save}