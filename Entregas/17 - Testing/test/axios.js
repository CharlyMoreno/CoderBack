const axios = require('axios');
const { generar } = require("./generador/productos.js");
const url =  `http://localhost:8080/api/productos`

// ------ ID PRODUCTO CREADO --------
let productId


async function test(){
    console.log("------- GET ALL -------")
    const respGetAll = await axios.get(url, {})
    console.log(respGetAll.data)

    console.log("------- POST NEW PRODUCT -------")
    const producto = generar()
    const respPostProduct = await axios.post(url, producto)
    productId = respPostProduct.data.id
    console.log(respPostProduct.data)

    console.log("------- PUT PRODUCT -------")
    const productoModificado = {nombre:"Nombre Modificado ;)"}
    const respPutProduct  = await axios.put(`${url}/${productId}`, productoModificado)
    const respGetByID = await axios.get(`${url}/${productId}`,{})
    console.log(respGetByID.data)

    console.log("------- DELETE PRODUCT -------")
    const respDeleteProduct = await axios.delete(`${url}/${productId}`,{});
    console.log(respDeleteProduct.data)
}

test();