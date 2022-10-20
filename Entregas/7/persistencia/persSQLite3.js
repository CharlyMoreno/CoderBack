const {options} = require('../options/SQLite3.js')
const knex = require('knex')(options);

async function realizarSelect(tabla){
    try{
        let rows = await knex.from(tabla).select('*')
        return rows;
    }
    catch(err) {
        console.log(err);
    }
}

async function realizarInsert(tabla,objeto){
    try{
        await knex(tabla).insert(objeto);
    }
    catch(err) {
        console.log(err);  
    }
}

module.exports = {realizarSelect,realizarInsert};