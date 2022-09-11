const express = require('express')
const app = express()
const contendor = require('./Contenedor.js')

const PORT = process.env.PORT || 8080

const cont1 = new contendor.Contenedor('productos.txt')

//Esta variable global define si se borraran todos los productos de productos.txt y se agregaran nuevos, o funcionara con los que ya trae el txt.
//TRUE ---> BORRAR PRODUCTOS
//FALSE ---> NO BORRAR PRODUCTOS
const borrarProductos = true


app.get('/', (req, res) => {
    //Mensaje de bienvenida a la ruta raiz.
    const message = `
    <h1 style='color:blue;'>Bienvenidos al servidor express</h1>
    `
    res.send(message)
})

app.get('/productos', async (req, res) => {
    //Pido la data y la envio como respuesta.
    const data = await cont1.getAll()
    res.send(data)
})

app.get('/productoRandom', async (req, res) => {
    //Pido la data
    let data = await cont1.getAll()
    //Selecciono numero al azar entre 0 y data.length
    const numRandom = Math.floor(Math.random()*data.length);
    //Envio como respuesta el objeto de data en la posicion de numRandom.
    res.send(data[numRandom])
})

const server = app.listen(PORT,async ()=>{
    console.log(`Listening on port ${PORT}`)

    //Para evitar errores en el productos.txt, cada vez que inicie el servidor se borraran todos los productos y se agregaran nuevos.
    //Se puede manejar mediante la variable global borrarProductos.

    if(borrarProductos) {
        //Elimino todos los elementos del array
        await cont1.deleteAll()
        //Agrego 4 elementos nuevos
        await cont1.save({"title":"Auriculares ASUS ROG STRIX GO CORE","precio":"18970","thumbnail":"https://acortar.link/InFFer"})
        await cont1.save({"title":"Auriculares HyperX Cloud Flight Black","precio":"20480","thumbnail":"https://acortar.link/InFFer"})
        await cont1.save({"title":"Auriculares Logitech H151 PC","precio":"2770","thumbnail":"https://acortar.link/InFFer"})
        await cont1.save({"title":"Auriculares Logitech G433 Gaming Black","precio":"16800","thumbnail":"https://acortar.link/InFFer"})

        await cont1.save({"title":"Disco Solido SSD Team 128GB","precio":"3199","thumbnail":"https://acortar.link/InFFer"})
        await cont1.save({"title":"Disco Solido SSD Team 256GB","precio":"4522","thumbnail":"https://acortar.link/InFFer"})
        await cont1.save({"title":"Disco Solido SSD KingDian 512GB","precio":"7700","thumbnail":"https://acortar.link/InFFer"})
        await cont1.save({"title":"Disco Sólido SSD Adata 240GB","precio":"4620","thumbnail":"https://acortar.link/InFFer"})
    }

})

server.on("error",err=>console.log(err));