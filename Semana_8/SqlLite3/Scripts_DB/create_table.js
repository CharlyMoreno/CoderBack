const {options} = require('../options/SQLite3.js')
const knex = require('knex')(options);

knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('nombre')
    table.string('apellido')
    table.integer('edad')
})
.then(() => console.log('Tabla creada'))
.catch((err) => console.log(err))
.finally(()=>{
    knex.destroy();
})