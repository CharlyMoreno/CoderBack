const path = require('path')
const sesionGet = async (req, res) => {
    try {
        const username = req.session.user
        res.send(`<h1>Bienvenido: <span>${username}</span></h1>
        <a href="/session/privado">Contenido Privado</a>
        <a href="/session/logout">Logout</a>`)
    } catch (error) {
        return res.status(500).json({
            msg: error.message,
            success: false
        })
    }
}
const sessionLogout = (req, res) => {
    req.session.destroy(err =>{
        if(err){
            return res.json({status:'Logout failed'})
        }
        res.send(`
        <body onLoad="redireccionar()">
            <h1>Hasta luego!</h1>
        <script>
            function redireccionar() {
                setTimeout("window.location.href = '/session/';", 2000);
            }
        </script>
        </body>`)})
}

const sessionPostLogin = (req, res) => {
    const {username,password} = req.body
    if(username !== 'pepe' || password !== '123') {
    return res.send(`
        <body onLoad="redireccionar()">
            <h1>Usuario o contraseña incorrecta!    </h1>
        <script>
            function redireccionar() {
                setTimeout("window.location.href = '/session/';", 2000);
            }
        </script>
        </body>`)
    }
    req.session.user = username
    req.session.admin = true
    res.redirect('/session/')
}

const sessionLogin = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'))
}

const sessionPrivado = (req, res) => {
    res.send('Contenido privado accedido correctamente.')
}
module.exports = {
    sesionGet:sesionGet,
    sessionLogout:sessionLogout,
    sessionPostLogin:sessionPostLogin,
    sessionLogin:sessionLogin,
    sessionPrivado:sessionPrivado
}