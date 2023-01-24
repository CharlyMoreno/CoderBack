const {asDto : asDtoProductos} = require('./producto.dto')

class DtoCarrito {
  constructor(carrito) {
    this.user = carrito.user,
    this.id = carrito.id
    this.productos = [];
    this.total = 0;
    if (carrito.productos.length > 0) {
      carrito.productos.forEach((element) => {
        this.productos.push(asDtoProductos(element));
        this.total += element.precio;
      });
    }
  }
}

function asDto(carrito) {
  if (Array.isArray(carrito))
      return carrito.map(p => new DtoCarrito(p))
  else
      return new DtoCarrito(carrito)
}

module.exports = {asDto};
