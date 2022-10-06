const express = require('express');
const PORT = process.env.PORT || 8080
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')

const con = require('./persistencia/persistencia.js')
const mens_pers  = new con.Contenedor(__dirname + '/persistencia/mensajes.txt');
const prod_pers  = new con.Contenedor(__dirname + '/persistencia/productos.txt');

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//HANDLEBARS 
const handlebars = require('express-handlebars');
const { application } = require('express');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: '.hbs'
}));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

// GET ALL
app.get('/',(req,res)=>{
    try{
        res.render("home",{})
    }
    catch(err){
        res.status(500)
    }
})

io.on('connection',async (socket)=>{
    console.log('Usuario conectado');
    const productos = await prod_pers.getAll();
    const mensajes = await mens_pers.getAll();
    
    socket.emit('dataProducts',[productos]);

    socket.on('new-product',async data => {
        await prod_pers.save(data);
        const productos = await prod_pers.getAll();
        io.sockets.emit('dataProducts', [productos]);
    });

    socket.emit('dataMessages',[mensajes]);

    socket.on('new-message',async data => {
        await mens_pers.save(data);
        const mensajes = await mens_pers.getAll();
        io.sockets.emit('dataMessages', [mensajes]);
    });
       
})


const server = httpServer.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));