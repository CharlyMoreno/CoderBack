const passport = require('passport')
const { authMiddleware } = require('../middlewares/auth.middleware')
const PaisesDaoArchivo = require('../daos/paises.archivo')
const paisesDao = new PaisesDaoArchivo();

const getLogin = (req,res) =>{
    res.render('login')
}

const postLogin = passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/api/auth/login',
})

const getRegister = async (req, res) => {   // devuelve la vista de registro 
    const paises = await paisesDao.getAll();
    const error = null;
    res.render('register',{paises: paises,error:error})
}

const postRegister = passport.authenticate('signup', {
        successRedirect: '/api/auth/login',
        failureRedirect: '/api/auth/register',
})


const getLogout = (req, res) => { 
    req.session.destroy(err =>{
        if(err) return res.send(err)
        res.render('logout')
    })
}

module.exports = {getLogin,postLogin,getRegister,postRegister,getLogout}
