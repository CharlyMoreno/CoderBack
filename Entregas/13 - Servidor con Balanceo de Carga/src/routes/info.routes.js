const { Router } = require('express')
const infoRouter = Router()
const numCPUs = require('os').cpus().length

infoRouter.get('/', (req, res) => {
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
    res.render('info',{info:info})
})

module.exports = { 
    infoRouter 
}