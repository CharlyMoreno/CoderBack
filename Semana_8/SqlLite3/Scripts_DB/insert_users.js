const {options} = require('../options/SQLite3.js')
const knex = require('knex')(options);

const users = [
    {nombre:"Charly",apellido:"Moreno",edad:20},
    {nombre:"Gonzalo",apellido:"Moreno",edad:16},
    {nombre:"Carlos",apellido:"Moreno",edad:56},
    {nombre:"Delia Susana",apellido:"Santa Maria",edad:25},
]

knex('users').insert(users)
.then(()=>console.log('Datos correctamente ingresados'))
.catch((err) => {console.log(err)})
.finally(()=>{knex.destroy()})
