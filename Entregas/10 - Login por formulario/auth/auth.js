function auth(req,res,next){
    if(req.session?.user === 'pepe' && req.session?.admin){
        req.session.cookie.maxAge = 60 * 1000
        req.session.cookie.expires = new Date(Date.now() + 60 * 1000);
        req.session.touch();
        return next()
    }
    return res.status(401).redirect('/session/login')

}

module.exports = auth;