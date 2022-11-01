import {ContenedorMongoDb} from "../../contenedores/ContenedorMongoDb.js";
import productoSchema from "../../models/productos_models.js";

class ProductosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super(productoSchema);
    }
}

export {ProductosDaoMongoDb};