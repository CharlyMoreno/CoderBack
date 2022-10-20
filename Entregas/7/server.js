const express = require('express');
const PORT = process.env.PORT || 8080
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')

const perSqlLite = require(__dirname + '/persistencia/persSQLite3.js');
const persMysql = require(__dirname + '/persistencia/persMysql.js');

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//HANDLEBARS 
const handlebars = require('express-handlebars');
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
    const productos = await persMysql.realizarSelect('productos');
    const mensajes = await perSqlLite.realizarSelect('mensajes')
    
    socket.emit('dataProducts',[productos]);

    socket.on('new-product',async data => {
        await persMysql.realizarInsert('productos',data);
        const productos = await persMysql.realizarSelect('productos');
        io.sockets.emit('dataProducts', [productos]);
    });

    socket.emit('dataMessages',[mensajes]);

    socket.on('new-message',async data => {
        await perSqlLite.realizarInsert('mensajes',data);;
        const mensajes = await perSqlLite.realizarSelect('mensajes');
        io.sockets.emit('dataMessages', [mensajes]);
    });
       
})


const server = httpServer.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));