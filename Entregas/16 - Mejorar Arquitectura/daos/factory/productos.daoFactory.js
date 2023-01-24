//___________________________________________  LOGS  _________________________________________________ //
const {logger} = require('../../loggers/log4js.loggers')

const ProductosDaoMongoDB = require("../../daos/productos/productos.mongodb");

const opcion = process.env.PRODUCTOS_PERSISTENCIA || 'MongoDB'

let dao
switch (opcion) {
    case 'MongoDB':
        dao = ProductosDaoMongoDB.getInstance()
        break
    default:
        logger.error(` ATENCION: El método ${opcion} para "PRODUCTOS" no está implementado. Por lo que se ejecutará por defecto la persistencia en MongoDB. `)
        dao = ProductosDaoMongoDB.getInstance()
}

module.exports = class ProductosDaoFactory {
    static getDao() {
        return dao
    }
}
