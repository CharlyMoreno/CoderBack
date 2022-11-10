const normalizr = require('normalizr')
const { schema, normalize, denormalize } = normalizr
      
// Definimos un esquema de usuarios (autores y comentadores)
const authorSchema = new schema.Entity('author',{},{ idAttribute: 'email' })

// Definimos un esquema de comentadores
const messageSchema = new schema.Entity('message',{
    author:authorSchema
})

// Definimos un esquema de artículos
const mensajesSchema = new schema.Entity('mensajes', {
    messages: [messageSchema]
});

class Normalizador{
    static normalizar(mensajes){
        return normalize(mensajes,mensajesSchema)
    }
    static desnormalizar(mensajes){
        return desnormalize(mensajes.result, mensajesSchema, mensajes.entities)
    }
}



module.exports = Normalizador

// console.log(' - ------------------------ tamaño objeto original ------------------------ - ')

// console.log(JSON.stringify(mensajesData).length)

// console.log(' - ------------------------  objeto normalizado ------------------------ - ')

// // normalizando el objeto original

// const nomalizeOriginalData = normalize(mensajesData, mensajesSchema)
// console.log(JSON.stringify(nomalizeOriginalData).length)
// print(nomalizeOriginalData)

// console.log(' - ------------------------  objeto denormalizado ------------------------ - ')

// // denormalizando el objeto normalizado

// const denormalizeOriginalData = denormalize(nomalizeOriginalData.result, mensajesSchema, nomalizeOriginalData.entities)

// // console.log(denormalizeOriginalData)
// console.log(JSON.stringify(denormalizeOriginalData).length)