const {options} = require('../options/SQLite3.js')
const knex = require('knex')(options);

knex.from('users').select('*')
.then((rows) => {
    for(row of rows){
        console.log(`${row['nombre']}`)
    }
})
.catch((err) => console.log(err))
.finally(()=>{
    knex.destroy();
})