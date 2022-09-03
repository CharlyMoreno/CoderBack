const con = require('./Contenedor.js')

const inicio = async () => {
    cont1 = new con.Contenedor('productos.txt')
    
    // const idCreado = await cont1.save({"title":"Tomate","precio":"1500","hola":"http://localhost"})
    
    // let data = await cont1.getAll()
    // data = JSON.parse(data)
    

    // console.log("--------------------------------")
    // console.log(data)
    // console.log("--------------------------------")

    console.log(await cont1.getById(1))


}

inicio();
