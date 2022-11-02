import {ContenedorMemoria} from "../../contenedores/ContenedorMemoria.js";

class ProductosDaoMemoria extends ContenedorMemoria {
    constructor() {
        super("producto");
    }
}

export {ProductosDaoMemoria};