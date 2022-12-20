const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cluster = require('cluster')
require('dotenv').config()

const PORT = parseInt(process.argv[2]) || 8080
const numCPUs = require('os').cpus().length
const mode = process.argv[3]

const handlebars = require('express-handlebars')
const { authRouter } = require('./Routes/auth.routes.js')
const { infoRouter } = require('./Routes/info.routes.js')
const { randomsRouter } = require('./Routes/randoms.routes.js')
const { authMiddleware } = require('./middlewares/auth.middleware')
const { loggerMiddleware } = require('./middlewares/logger.middleware')
//_____________________________________________ mongo para session _____________________________________ //
const MongoStore = require('connect-mongo')
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }
//____________________________________________________________________________________________________ //
const passport = require('passport')
const { initPassport } = require('./middlewares/passport.js')
//____________________________________________________________________________________________________ //

//___________________________________________  LOGS  _________________________________________________ //
const {logger} = require('./loggers/log4js.loggers')
//____________________________________________________________________________________________________ //
const app = express()

 /////////////////////// configuracion de handlebars /////////////////////////
 app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
    })
)
app.set("view engine", "hbs")
app.set("views", "./views")

//////////////  middleware  ///////////////////////
app.use(session({
    secret: process.env.SECRET,    
    store: MongoStore.create({
        mongoUrl: process.env.MONGOURL,
        mongoOptions: advancedOptions,
    }),
    resave: true, 
    saveUninitialized: true,
    cookie:{
        maxAge:60 * 1000
    }
}))

app.use(cookieParser(process.env.SECRET))

initPassport()
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(loggerMiddleware)

app.use('/api/auth', authRouter)
app.use('/info',infoRouter)
app.use('/api/randoms',randomsRouter)

app.all("*", (req, res) => {
    logger.warn(`[${req.method}] ${req.originalUrl} - No existente`)
    res.status(404).json({"error": "ruta no existente"})
});

app.get('/',(req, res) => {
    // res.render('principal')
    res.send(`Servidor express en PORT: ${PORT} - PID ${process.pid} - ${new Date(Date.now()).toISOString()}`)
})

app.get('/privado', authMiddleware,(req, res) => {
    res.send('Contenido Privado')
})

if(mode === 'cluster'){
    if (cluster.isPrimary) {
        logger.info(`Master ${process.pid} is running`)
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork()
        }
        cluster.on('exit', (worker, code, signal) => {
            logger.info(`worker ${worker.process.pid} died`)
        })
    } else {
        
        const server = app.listen(PORT,()=>{
            logger.info(`Listening on port ${PORT}`)
        })
        
        server.on("error",err=>logger.error(err));
        
        logger.info(`Worker ${process.pid} started`)
    }
}
else{
    const server = app.listen(PORT,()=>{
        logger.info(`Listening on port ${PORT}`)
    })
    
    server.on("error",err=>logger.error(err));
}

logger.error('Test Error')



