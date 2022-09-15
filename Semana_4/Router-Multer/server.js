const express = require('express');
const { Router } = express;

const app = express()
const router = Router()
const routerUser = require('./router/usuarios')

const PORT = process.env.PORT || 4000

router.get('/recurso', (req, res) => {
   res.send('get ok')
})

router.post('/recurso', (req, res) => {
   res.send('post ok')
})

const middle = (req,res,next) => {
    console.log('Soy un middle')
    next();
}
router.use('/usuarios', middle,routerUser)

app.use('/api', router)

const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

server.on("error",err=>console.log(err));