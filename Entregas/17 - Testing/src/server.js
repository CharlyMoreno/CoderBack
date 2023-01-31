const {app} = require('./app')
//___________________________________________  LOGS  _________________________________________________ //
const {logger} = require('./loggers/log4js.loggers')

require('dotenv').config()
const PORT = process.env.PORT || 8080

const server = app.listen(PORT,()=>{
    logger.info(`Listening on port ${PORT}`)
})

server.on("error",err=>logger.error(err));