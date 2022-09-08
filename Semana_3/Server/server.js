const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

let visitas = 0;

app.get('/', (req, res) => {
    const message = `
    <h1 style='color:blue;'>Bienvenidos al servidor express</h1>
    <p>Rutas habilitadas: /visitas y /fyh. Probalas!</p>
    `
    res.send(message)
})

app.get('/visitas', (req, res) => {
    visitas++;
    res.send(`Hasta el momento se registraron ${visitas} visitas`)
})

app.get('/fyh', (req, res) => {
    const fechaActual = new Date();
    res.send({"fyh": fechaActual.toString("dd/MM/yyyy HH:mm:ss")})
})



const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));