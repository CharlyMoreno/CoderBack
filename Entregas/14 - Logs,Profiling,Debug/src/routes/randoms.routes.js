const { Router } = require('express')
const randomsRouter = Router()
const {fork} = require('child_process')
const { logger } = require('../loggers/log4js.loggers')

const randomNumbersGeneratorFork = fork('./utils/numberRandom.js')

randomsRouter.get('/', (req, res) => {
    try{
        const cant = req.query.cant || 100000000;
        const max = req.query.max || 1000

        randomNumbersGeneratorFork.send({cant:cant,max:max});
        randomNumbersGeneratorFork.on('message', (resultado) => {
            res.status(200).send(resultado);
        })
    }
    catch(err){
        logger.error(err)
    }
})

module.exports = { 
    randomsRouter 
}