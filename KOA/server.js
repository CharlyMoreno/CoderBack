const koa = require('koa')
const { koaBody } = require('koa-body')
const routerBooks = require('./book.router')


const app = new koa()

app.use(koaBody())

// app.use(async (ctx) => {
//     ctx.body = 'Hello, world'
// })

app.use(routerBooks.routes())

const PORT = 8000
app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})
