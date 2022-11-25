const { Router } = require('express')
const { sesionGet, sessionLogout, sessionPostLogin,sessionLogin,sessionPrivado } = require('../../controllers/session/session.controllers')
const auth = require('../../auth/auth')

const router = Router()

// aca nuestras rutas
router.get('/',auth, sesionGet)
router.get('/logout',auth, sessionLogout)
router.post('/login', sessionPostLogin)
router.get('/login',sessionLogin)
router.get('/privado',auth,sessionPrivado)
   

module.exports = router