//___________________________________________  LOGS  _________________________________________________ //
const {logger} = require('../../loggers/log4js.loggers')

const UsersDaoMongoDB = require("../../daos/users/users.mongodb");

const opcion = process.env.USERS_PERSISTENCIA || 'MongoDB'

let dao
switch (opcion) {
    case 'MongoDB':
        dao = UsersDaoMongoDB.getInstance()
        break
    default:
        logger.error(` ATENCION: El método ${opcion} para "USERS" no está implementado. Por lo que se ejecutará por defecto la persistencia en MongoDB. `)
        dao = UsersDaoMongoDB.getInstance()
}

module.exports = class UsersDaoFactory {
    static getDao() {
        return dao
    }
}
