const PaisesDaoFactory = require('../daos/factory/paises.daoFactory')
const paisesDao = PaisesDaoFactory.getDao();

const {asDto} = require('../dto/paises.dto')

const getAll = async () => {
    try{
        const paises = await paisesDao.getAll();
        return asDto(paises);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {getAll}