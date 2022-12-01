const { Router } = require('express')
const randomsRouter = Router()
const {fork} = require('child_process')

const randomNumbersGeneratorFork = fork('./utils/numberRandom.js')

randomsRouter.get('/', (req, res) => {
    try{
        const cant = req.query.cant || 5000;
        const max = req.query.cant || 1000

        randomNumbersGeneratorFork.send({cant:cant,max:max});
        randomNumbersGeneratorFork.on('message', (resultado) => {
            res.status(200).send(resultado);
        })
    }
    catch(err){
        console.log(err)
    }
})

module.exports = { 
    randomsRouter 
}