const express = require('express')
require('dotenv').config()

//___________________________________________  LOGS  _________________________________________________ //
const {logger} = require('./loggers/log4js.loggers')
const { loggerMiddleware } = require('./middlewares/logger.middleware')

const apiProductosRouter = require('./routes/api.productos.routes')
const { productosRouter } = require('./routes/productos.routes.js')
const { carritoRouter } = require('./routes/carrito.routes.js')

const { getCurrentUser } = require('./middlewares/currentUser')

const { graphqlHTTP } = require('express-graphql')
const {configGraphql} = require('./schema.graphql')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(loggerMiddleware)

app.use('/api/productos', apiProductosRouter)
app.use('/graph', graphqlHTTP(configGraphql))

app.get('/',async(req, res) => {
    res.status(200).json({"mensaje":"Hola Mundo"})
})

app.get('/privado', async (req, res) => {
    res.send('Contenido Privado')
})

module.exports = {app}
