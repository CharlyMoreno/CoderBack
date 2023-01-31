module.exports = class Producto {
    #id
    #nombre
    #precio
    #stock
    #descripcion
    #codigo
    #foto
    #timestamp
   
    constructor({ id, nombre, precio, stock,descripcion, codigo,foto}) {
      this.#id = id
      this.#nombre = nombre
      this.#precio = precio
      this.#stock = stock
      this.#descripcion = descripcion
      this.#codigo = codigo
      this.#foto = foto
      this.#timestamp = new Date()
    }
   
    get id() { 
        return this.#id 
    }
   
    set id(id) {
      if (!id) throw new Error('"id" es un campo requerido')
      this.#id = id
    }
   
    get nombre() { 
        return this.#nombre 
    }

    set nombre(nombre) {
        if (!nombre) throw new Error('"nombre" es un campo requerido')
        this.#nombre = nombre
      }
     
    get precio() { 
        return this.#precio 
    }
     
    set precio(precio) {
        if (!precio) throw new Error('"precio" es un campo requerido')
        if (isNaN(precio)) throw new Error('"precio" debe ser numérico')
        if (precio < 0) throw new Error('"precio" debe ser positivo')
        this.#precio = precio
    }
     
    get stock() { return this.#stock }
    
    set stock(stock) {
        if (!stock) throw new Error('"stock" es un campo requerido')
        if (isNaN(stock)) throw new Error('"stock" debe ser numérico')
        if (stock < 0) throw new Error('"stock" debe ser positivo')
        this.#stock = stock;
    }

    get descripcion() { return this.#descripcion }
    set descripcion(descripcion) {
        if (!descripcion) throw new Error('"descripcion" es un campo requerido')
        this.#descripcion = descripcion
    }

    get codigo() { return this.#codigo}
    set codigo(codigo) {
        if (!codigo) throw new Error('"codigo" es un campo requerido')
        this.#codigo = codigo
    }
    get foto() {return this.#foto}
    set foto(foto) {
        if (!foto) throw new Error('"foto" es un campo requerido')
        this.#foto = foto
    }
}
     
