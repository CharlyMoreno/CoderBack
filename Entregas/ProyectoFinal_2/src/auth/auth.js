const checkAdministrator = (req, res, next) => {
    if (req.headers.administrator != "true") {
      return res.json({
        "error":-1,"descripcion":`${req.baseUrl} y método ${req.method} no disponible para usuarios.`
      });
    }
    return next();
  };
  
  export default checkAdministrator;