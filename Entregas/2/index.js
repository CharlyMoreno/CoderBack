const con = require('./Contenedor.js')

async function inicio() {
    cont1 = new con.Contenedor('productos.txt')

    //Elimino todos los elementos del array
    await cont1.deleteAll()

    //Agrego 4 elementos nuevos
    await cont1.save({"title":"Auriculares ASUS ROG STRIX GO CORE","precio":"18970","thumbnail":"https://acortar.link/InFFer"})
    await cont1.save({"title":"Auriculares HyperX Cloud Flight Black","precio":"20480","thumbnail":"https://acortar.link/InFFer"})
    await cont1.save({"title":"Auriculares Logitech H151 PC","precio":"2770","thumbnail":"https://acortar.link/InFFer"})
    await cont1.save({"title":"Auriculares Logitech G433 Gaming Black","precio":"16800","thumbnail":"https://acortar.link/InFFer"})

    //Agrego 1 elemento nuevo guardando su id.
    const idCreado = await cont1.save({"title":"Silla Gamer Cooler Master Caliber R2C Grey","precio":"107400","thumbnail":"https://acortar.link/InFFer"})
    //Pido el elemento que cree anteriormente
    console.log(await cont1.getById(idCreado))

    //Elimino el elemento que agregue antes
    await cont1.deleteById(idCreado)

    //Por ultimo muestro todo
    console.log("--------------------------------")
    console.log(await cont1.getAll())
    console.log("--------------------------------")

}

inicio();
