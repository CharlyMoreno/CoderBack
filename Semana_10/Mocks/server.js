const express = require('express');
const app = express()

const PORT = process.env.PORT || 8080


const nombres = ['Luis','Lucia','Juan','Agusto', 'Ana']
const apellidos = ['Pieres','Cacurri','Bezzola','Alberca','Mei']
const colores = ['rojo','verde','azul','amarillo','magenta']
const maxObjetos = 10

app.get(('/'),(req,res) => {
    res.send('Hola Mundo')
})

app.get('/test', (req, res) => {
    const data=[]
    for(i=0; i< maxObjetos; i++){
        const objeto = {
            nombre: nombres[Math.floor(Math.random() * nombres.length)],
            apellido:apellidos[Math.floor(Math.random() * apellidos.length)],
            color: colores[Math.floor(Math.random() * colores.length)]
        }
        data.push(objeto)
    }
    res.send(data)
})


const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));