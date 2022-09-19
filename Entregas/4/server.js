const express = require('express');
const { Router } = express;

const app = express()
const routerProd = require('./router/productos')

const PORT = process.env.PORT || 8080


app.use('/api/productos', routerProd)
app.use(express.static('public'));


const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));