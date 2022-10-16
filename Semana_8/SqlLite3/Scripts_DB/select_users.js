const {options} = require('../options/SQLite3.js')
const knex = require('knex')(options);


function realizarSelect() {
    knex.from('users').select('*')
    .then(rows => {
        return rows
    })
    .catch((err) => console.log(err))
    .finally(()=>{
        knex.destroy();
    })
}

module.exports = realizarSelect;