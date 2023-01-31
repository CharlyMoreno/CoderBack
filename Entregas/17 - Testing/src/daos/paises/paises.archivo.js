const ContenedorArchivo = require("../../contenedores/ContenedorArchivo.js");

let instancia = null;
class PaisesDaoArchivo extends ContenedorArchivo {
    static getInstance(){
        if(!instancia) instancia = new PaisesDaoArchivo();
        return instancia;
    }
    constructor() {
        super("./db/paises.json");
    }
}
module.exports = PaisesDaoArchivo;