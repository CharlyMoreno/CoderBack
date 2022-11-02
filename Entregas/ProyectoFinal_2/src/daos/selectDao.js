// Archivo
import { ProductosDaoArchivo } from "../daos/productos/ProductosDaoArchivo.js";
import { CarritosDaoArchivo } from "../daos/carritos/CarritosDaoArchivo.js";
// Memoria
import { ProductosDaoMemoria } from "./productos/ProductosDaoMemoria.js";
import { CarritosDaoMemoria } from "./carritos/CarritosDaoMemoria.js";
// Firebase
// import { ProductosDaoFirebase } from "./productos/ProductosDaoFirebase.js";
// import { CarritosDaoFirebase } from "./carritos/CarritosDaoFirebase.js";
// MongoDb
// import { ProductosDaoMongoDb } from "../daos/productos/ProductosDaoMongoDb.js";
// import { CarritosDaoMongoDb } from "../daos/carritos/CarritosDaoMongoDb.js";

let productosDao;
let carritosDao;

const PERS = process.env.PERS || "memoria";

switch (PERS) {
  case "archivo":
    productosDao = new ProductosDaoArchivo();
    carritosDao = new CarritosDaoArchivo();
    break;

  case "memoria":
    productosDao = new ProductosDaoMemoria();
    carritosDao = new CarritosDaoMemoria();
  break;

  // case "firebase":
  //   productosDao = new ProductosDaoFirebase();
  //   carritosDao = new CarritosDaoFirebase();
  //   break;

  case "mongoDb":
    productosDao = new ProductosDaoMongoDb();
    carritosDao = new CarritosDaoMongoDb();
    break;
}

export { productosDao, carritosDao };