import {ContenedorArchivo} from "../../contenedores/ContenedorArchivo.js";
import {ProductosDaoArchivo} from "../productos/ProductosDaoArchivo.js";

const productoApi = new ProductosDaoArchivo();

class CarritosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super("../db/carrito.json");
    }
    async newCart(cart){
        try{
            if(!cart.timestamp){
                cart.timestamp = new Date().toDateString();
            }
            const cartCreated = await this.save(cart)
            return cartCreated
       }
       catch(err){
           console.log(err)
       }
    }
    
    async getProductsByCartId(id){
        try{
             const cart = await this.getById(id)
             return cart.productos
        }
        catch(err){
            console.log(err)
        }
    }

    async addProductByIdCart(idCart,idProd){
        try{
            const carrito = await this.getById(idCart)
            const producto = await productoApi.getById(idProd)

            carrito.productos.push(producto)

            const carritoUpdated = await this.update(carrito)

            return carritoUpdated;
        }
        catch(err){
            console.log(err)
        }
    }
    async deleteProductByIdCart(idCart,idProd){
        try{

            const carrito = await this.getById(idCart)
            const producto = await productoApi.getById(idProd)

            carrito.productos.splice(carrito.productos.indexOf(producto),1)

            const carritoUpdated = await this.update(carrito)

            return carritoUpdated;
        }
        catch(err){
            console.log(err)
        }
    }
}

export {CarritosDaoArchivo};