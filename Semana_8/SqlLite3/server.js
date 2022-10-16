const express = require('express');
const select = require('./Scripts_DB/select_users')
const app = express()

const PORT = process.env.PORT || 8080

app.get(('/'),(req,res) => {
    // res.send(select.realizarSelect())
})

const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));