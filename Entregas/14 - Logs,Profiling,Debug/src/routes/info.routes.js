const { Router } = require('express')
const infoRouter = Router()
const numCPUs = require('os').cpus().length
const compression = require('compression')

infoRouter.get('/', (req, res) => {
    const info = getInfo()
    res.render('info',{info:info})
})

infoRouter.get('/gzip', compression(),(req, res) => {
    const info = getInfo()
    res.render('info',{info:info})
})

function getInfo(){
    const info = {
        args:process.argv.toString(),
        sistOperativo:process.platform,
        versionNode:process.version,
        memoriaTotal:process.memoryUsage().heapTotal,
        path:process.cwd(),
        processId:process.pid,
        carpetaProyecto:process.cwd(),
        numCPUs:numCPUs
    }
    return info;
}

module.exports = { 
    infoRouter 
}