const { buildSchema } = require('graphql')

const {getAll,save,getById,update,deleteById,getByNombre} = require('./services/productosGraph.service')

const schema = buildSchema(`
input ProductoInput {
    nombre: String,
    precio: Float,
    descripcion: String,
    codigo: String,
    foto: String,
    stock: Int
  }
  type Producto {
    id: ID!,
    nombre: String,
    precio: Float,
    descripcion: String,
    codigo: String,
    foto: String,
    stock: Int
  }
  type Query {
    getById(id: ID!): Producto,
    getByNombre(nombre: String): Producto,
    getAll(campo: String ): [Producto]
  }
  type Mutation{
    save(datos: ProductoInput) : Producto,
    update(id: ID!,datos: ProductoInput) : Producto,
    deleteById(id: ID!) : Producto
  }
`)

const configGraphql = {
    schema: schema,
    rootValue: {
        getById,
        getAll,
        getByNombre,
        deleteById,
        save,
        update
    },
    graphiql: true
}

module.exports = {configGraphql}
