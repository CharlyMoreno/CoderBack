const express = require('express');
const PORT = process.env.PORT || 8080
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const routesProductos = require('./routes/productos')
const routesMensajes = require('./routes/mensajes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.use('/api/productos', routesProductos)
app.use('/api/mensajes', routesMensajes)

// GET ALL
app.get('/',(req,res)=>{
    try{
        // res.render("home",{})
        res.send('Hola Mundo')
    }
    catch(err){
        res.status(500)
    }
})


const server = httpServer.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));