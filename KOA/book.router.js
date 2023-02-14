const Router = require('koa-router')

const router = new Router({
    prefix: '/api/books'
})


let books = [    
    {id: '101', name:'Figth Club 1', athor: 'Chuck Palahink 1'},
    {id: '102', name:'Figth Club 2', athor: 'Chuck Palahink 2'},
    {id: '103', name:'Figth Club 3', athor: 'Chuck Palahink 3'},
    {id: '104', name:'Figth Club 4', athor: 'Chuck Palahink 4'}
]

router.get('/', ctx => {
    let libros = books
    ctx.body = {
        status: 200,
        libros
    }
})


  /* API REST Get x ID */
  router.get('/:id', ctx => {
    
    let libro = books.find(book => book.id === ctx.params.id)
    

    if(!libro){
        ctx.response.status = 404
        ctx.body = {
            status: 'error!',
            message: 'Book not found'
        }
        return false
    }
            
    ctx.body = libro
  })
  
  /* API REST Post */
router.post('/', ctx => {
    // Check if any of the data field not empty
    if (
      !ctx.request.body.id ||
      !ctx.request.body.name ||
      !ctx.request.body.author
    ) {
      ctx.response.status = 400
      ctx.body = {
        status: 'error',
        message: 'Please enter the data',
      }
    } else {
      const newBook = books.push({
        id: ctx.request.body.id,
        name: ctx.request.body.name,
        author: ctx.request.body.author,
      })
      ctx.response.status = 201
      ctx.body = {
        status: 'success',
        message: `New book added with id:  ${ctx.request.body.id} & name: ${ctx.request.body.name}`,
      }
    }
  })

  /* API REST Put */
router.put('/update/:id', ctx => {
    // Check if any of the data field not empty
    if (
      !ctx.request.body.id ||
      !ctx.request.body.name ||
      !ctx.request.body.author
    ) {
      ctx.response.status = 400
      ctx.body = {
        status: 'error',
        message: 'Please enter the data',
      }
    } else {
      const id = ctx.params.id
      const index = books.findIndex(book => book.id == id)
      books.splice(index, 1, ctx.request.body)
      ctx.response.status = 201
      ctx.body = {
        status: 'success',
        message: `New book updated with id: ${ctx.request.body.id} & name: ${ctx.request.body.name}`,
      }
    }
  })

  router.delete('/:id', ctx => {
    const id = ctx.params.id
    const index = books.findIndex(book => book.id == id)
    books.splice(index, 1)
    ctx.response.status = 200
    ctx.body = {
      status: 'success',
      message: `Book deleted with id: ${id}`,
    }
  })

module.exports = router
