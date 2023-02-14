const Koa = require('koa')
const {koaBody} = require('koa-body')
require('dotenv').config()

const app = new Koa()

app.use(koaBody());

const productosRouter = require('./routes/api.productos.routes')
app.use(productosRouter.routes())

const PORT = process.env.PORT || 8080

const server = app.listen(PORT,()=>{
    console.log(`✅ Servidor KOA escuchando en el puerto ${PORT}`)
})

server.on('error', error=> console.log('Error en el servidor Koa: ',error))