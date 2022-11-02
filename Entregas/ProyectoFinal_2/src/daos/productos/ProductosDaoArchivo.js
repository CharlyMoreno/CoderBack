import {ContenedorArchivo} from "../../contenedores/ContenedorArchivo.js";
import config from "../../config/config.js";
class ProductosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super("../db/productos.json");
    }
}

export {ProductosDaoArchivo};