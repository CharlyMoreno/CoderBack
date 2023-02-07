# Entrega #22 - GraphQL

Se modificó la entrega anterior para soportar GraphQL en el apartado de Productos. 

A través de GraphiQL (en la ruta /graph ) podremos hacer consultas para traer por id,traer por nombre, traer todos, agregar, modificar o eliminar por id un producto.

# Ejemplos
### GetAll
```graphql
query{
    getAll{
        nombre,
        precio,
        descripcion,
        stock
}

```
```json
{
  "data": {
    "getAll": [
      {
        "nombre": "Mouse Glorious Model D (Glossy White)",
        "precio": 19000,
        "descripcion": "Disco descripcion bla bla bla.",
        "stock": 10
      },
      {
        "nombre": "Placa Wifi USB Mercusys Wireless MW150US Nano",
        "precio": 990,
        "descripcion": "Placa Wifi ideal para pc",
        "stock": 10
      },
      {
        "nombre": "Silla Gamer Level Up Ares Negra y Roja",
        "precio": 64860,
        "descripcion": "Silla gamer Ergonómica ideal para Streamming",
        "stock": 3
      }
    ]
  }
}
```

### GetByID
```graphql
query{
  getById(id: "63bccfe9bc99c1d79650a1a9") {
    nombre,
    precio,
    descripcion
  }
}
```
```json
{
  "data": {
    "getById": {
      "nombre": "Mouse Glorious Model D (Glossy White)",
      "precio": 19000,
      "descripcion": "Disco descripcion bla bla bla."
    }
  }
}
```


### GetByName
```graphql
query{
  getByNombre(nombre:"Mouse Glorious Model D (Glossy White)"){
    nombre,
    descripcion,
    precio
  }
}
```
```json
{
  "data": {
    "getByNombre": {
      "nombre": "Mouse Glorious Model D (Glossy White)",
      "descripcion": "Disco descripcion bla bla bla.",
      "precio": 19000
    }
  }
}
```

### Save

```graphql
mutation{
  save(datos:{
    nombre:"Producto 120",
    descripcion: "Descripcion de prueba",
    precio: 1500,
    stock:10,
    foto: "",
    codigo:"COO-123"
    
  }){id,nombre,descripcion}
}
```
```json
{
  "data": {
    "save": {
      "id": "63e2a9fddcab55d7c7d3ab1a",
      "nombre": "Producto 120",
      "descripcion": "Descripcion de prueba"
    }
  }
}
```


### Update
```graphql
mutation{
  update(id:"63e2a9fddcab55d7c7d3ab1a",datos:{
    nombre:"Producto con nombre Actualizado"
  }){id,nombre}
}
```
```json
{
  "data": {
    "save": {
      "id": "63e2a9fddcab55d7c7d3ab1a",
      "nombre": "Producto con nombre Actualizado",
      "descripcion": "Descripcion de prueba"
    }
  }
}
```

### DeleteByID
```graphql
mutation{
  deleteById(id:"63e2a9fddcab55d7c7d3ab1a"){}
}
```