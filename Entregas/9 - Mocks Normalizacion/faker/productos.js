const {faker} = require('@faker-js/faker');

faker.locale = 'es'

class ProductosFaker{
    static generarAleatorios(cantidad){
        let data = [];
        for(let i = 0; i < cantidad; i++){
            const producto = {
                "titulo":faker.commerce.product(),
                "precio":faker.commerce.price(100,10000),
                "thumbnail": faker.image.abstract(720,480,true),
                "id":i+1
            }
            data.push(producto)
        }
        return data;
    }
}

module.exports = ProductosFaker;