//MODIFICAR ACA ----> 
// options/mysql.js ==> Para crear tablas/datos en mysql
//options/SQLite3.js ==> Para crear tablas/datos en SQLite3

const {options} = require('../options/mysql.js')
const knex = require('knex')(options);

knex.schema.createTable('mensajes', table => {
            table.increments('id')
            table.string('author')
            table.string('mensaje')
            table.timestamp('fecha')
        })
.then(() => console.log('Tabla creada'))
.catch((err) => console.log(err))


knex.schema.createTable('productos', table => {
    table.increments('id')
    table.string('titulo')
    table.string('precio')
    table.string('thumbnail')
})
.then(() => console.log('Tabla creada'))
.catch((err) => console.log(err))


const messages = [
    {
		"author": "SERVIDOR",
		"mensaje": "Bienvenido!",
		"fecha": "2022-10-01T21:19"
	},
    {
		"author": "Charly Moreno",
		"mensaje": "Hola Leo, te hablo desde el mas alla ;)",
		"fecha": "2022-10-06T11:35"
	}
]

const productos = [
    {
		"titulo": "Disco Sólido SSD Adata 240GB",
		"precio": "4620",
		"thumbnail": "https://acortar.link/InFFer",
	},
	{
		"titulo": "Disco Solido SSD KingDian 512GB",
		"precio": "7700",
		"thumbnail": "https://acortar.link/InFFer",
	},
	{
		"titulo": "Disco Solido SSD Team 256GB",
		"precio": "4522",
		"thumbnail": "https://acortar.link/InFFer",
	},
	{
		"titulo": "Disco Solido SSD Team 128GB",
		"precio": "3199",
		"thumbnail": "https://acortar.link/InFFer",
	},
	{
		"titulo": "Auriculares Logitech G433 Gaming Black",
		"precio": "16800",
		"thumbnail": "https://acortar.link/InFFer",
	},
	{
		"titulo": "Auriculares Logitech H151 PC",
		"precio": "2770",
		"thumbnail": "https://acortar.link/InFFer",
	},
	{
		"titulo": "Auriculares HyperX Cloud Flight Black",
		"precio": "20480",
		"thumbnail": "https://acortar.link/InFFer",
	},
	{
		"titulo": "Auriculares ASUS ROG STRIX GO CORE",
		"precio": "18970",
		"thumbnail": "https://acortar.link/InFFer",
	}
]

knex('mensajes').insert(messages)
.then(()=>console.log('Datos correctamente ingresados'))
.catch((err) => {console.log(err)})

knex('productos').insert(productos)
.then(()=>console.log('Datos correctamente ingresados'))
.catch((err) => {console.log(err)})