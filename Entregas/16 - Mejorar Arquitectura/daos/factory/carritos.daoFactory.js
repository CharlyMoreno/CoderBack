//___________________________________________  LOGS  _________________________________________________ //
const {logger} = require('../../loggers/log4js.loggers')

const { ModelBuildInstance } = require("twilio/lib/rest/autopilot/v1/assistant/modelBuild");
const CarritosDaoMongoDB = require("../../daos/carritos/carritos.mongodb");

const opcion = process.env.CARRITOS_PERSISTENCIA || 'MongoDB'

let dao
switch (opcion) {
    case 'MongoDB':
        dao = CarritosDaoMongoDB.getInstance()
        break
    default:
        logger.error(` ATENCION: El método ${opcion} para "CARRITOS" no está implementado. Por lo que se ejecutará por defecto la persistencia en MongoDB. `)
        dao = CarritosDaoMongoDB.getInstance()
}

module.exports = class CarritosDaoFactory {
    static getDao() {
        return dao
    }
}
