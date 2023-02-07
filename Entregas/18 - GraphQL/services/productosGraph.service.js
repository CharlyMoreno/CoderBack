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
        const producto = await productosDao.save(product.datos);
        return asDto(producto);
    }
    catch(err){
        console.log(err);
    }
}

const getById = async (id) => {
    try{
        const producto = await productosDao.getById(id.id);
        if(producto) return asDto(producto);
        else return null;
    }
    catch(err){
        console.log(err);
    }
}

const getByNombre = async (nombre) => {
    try{
        const producto = await productosDao.getByNombre(nombre.nombre);
        if(producto) return asDto(producto);
        else return null;
    }
    catch(err){
        console.log(err);
    }
}

const update = async (id,product) => {
    try{
        const producto = await productosDao.update(id.id,product.datos);
        if(producto) return asDto(producto);
        else return null;
    }
    catch(err){
        console.log(err);
    }
}

const deleteById = async (id) => {
    try{
        console.log(id)
        const producto = await productosDao.deleteById(id.id);
        if(producto) return asDto(producto);
        else return null;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {getAll,save,getById,update,deleteById,getByNombre}