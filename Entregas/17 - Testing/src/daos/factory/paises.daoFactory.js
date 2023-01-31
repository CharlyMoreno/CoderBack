//___________________________________________  LOGS  _________________________________________________ //
const {logger} = require('../../loggers/log4js.loggers')

const PaisesDaoArchivo = require("../../daos/paises/paises.archivo");
const PaisesDaoMongoDB = require("../../daos/paises/paises.mongodb");

const opcion = process.env.PAISES_PERSISTENCIA || 'MongoDB'

let dao
switch (opcion) {
    case 'MongoDB':
        dao = PaisesDaoMongoDB.getInstance()
        break
    case 'Archivo':
        dao = PaisesDaoArchivo.getInstance()
        break
    default:
        logger.error(` ATENCION: El método ${opcion} para "PAISES" no está implementado. Por lo que se ejecutará por defecto la persistencia en MongoDB. `)
        dao = PaisesDaoMongoDB.getInstance()
}

module.exports = class PaisesDaoFactory {
    static getDao() {
        return dao
    }
}
