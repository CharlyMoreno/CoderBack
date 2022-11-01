import {ContenedorMongoDb} from "../../contenedores/ContenedorMongoDb.js";
import carritoSchema from "../../models/carritos_models.js";

class CarritosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super(carritoSchema);
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
            const carritoUpdated = await this.collection.findByIdAndUpdate(idCart, {
                $push: { productos: idProd },
            });
            return carritoUpdated;
        }
        catch(err){
            console.log(err)
        }
    }
    async deleteProductByIdCart(idCart,idProd){
        try{
            const carritoUpdated = await this.collection.findByIdAndUpdate(idCart, {
                $pull: { productos: idProd },
            });
            return carritoUpdated;
        }
        catch(err){
            console.log(err)
        }
    }
}

export {CarritosDaoMongoDb};