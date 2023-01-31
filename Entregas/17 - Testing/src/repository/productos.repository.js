const Producto = require('./Producto')

const ProductosDaoFactory = require("../daos/factory/productos.daoFactory");

let instancia = null;
module.exports = class ProductosRepo {

    constructor() {
        this.dao = ProductosDaoFactory.getDao()
    }
    
    static getInstance(){
        if(!instancia) instancia = new ProductosRepo();
        return instancia;
    }
 
    async getAll() {
        const dtos = await this.dao.getAll()
        return dtos.map(dto => new Producto(dto))
    }
 
    async save(prod) {
        const dto = new ProductoDto(prod)
        return await this.dao.save(dto)
    }
 
}
