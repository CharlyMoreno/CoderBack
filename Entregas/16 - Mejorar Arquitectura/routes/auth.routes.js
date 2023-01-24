const { Router } = require('express')
const authRouter = Router()

const {getLogin,postLogin,getRegister,postRegister,getLogout} = require('../controllers/auth.controller')

//____________________________________________ login _____________________________________ //
authRouter.get('/login',getLogin)// lleva la vista del formulario de login

authRouter.post('/login', postLogin)

//____________________________________________ register _____________________________________ //

authRouter.get('/register', getRegister)   // devuelve la vista de registro 
authRouter.post('/register', postRegister)
//____________________________________________ logout _____________________________________ //

authRouter.get('/logout', getLogout) // cierra la sesion

module.exports = {  authRouter }