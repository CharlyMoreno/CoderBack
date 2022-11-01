import express from "express";
import routers from "./router/versions.js"

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/api', routers)
app.use(express.static('public'));


const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));