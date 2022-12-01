const { Router } = require('express')
const infoRouter = Router()

infoRouter.get('/', (req, res) => {
    const info = {
        args:process.argv.toString(),
        sistOperativo:process.platform,
        versionNode:process.version,
        memoriaTotal:process.memoryUsage().heapTotal,
        path:process.cwd(),
        processId:process.pid,
        carpetaProyecto:process.cwd()
    }
    res.render('info',{info:info})
})

module.exports = { 
    infoRouter 
}