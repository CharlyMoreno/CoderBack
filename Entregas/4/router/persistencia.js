const arrayProductos = [
    {
        "titulo":"Producto",
        "precio":1000,
        "thumbnail": "test",
        "id": 2
    },
    {
        "titulo":"Producto",
        "precio":1000,
        "thumbnail": "test",
        "id": 3
    },
    {
        "titulo":"Producto",
        "precio":1000,
        "thumbnail": "test",
        "id": 4
    },
    {
        "titulo":"Producto",
        "precio":1000,
        "thumbnail": "test",
        "id": 5
    }
];

const addProducto = (producto) => {

    if(producto.length > 1) {
        //Si me llega un array de productos, pusheo uno a uno, sino tendria un array dentro de otro array.
        producto.map((x) => {
            //Seteado de esta forma para que se adecue a la forma de producto que tengo, y evitar guardar datos extras que vengan en el body
            const productNew = {
                "titulo":x.titulo,
                "precio":x.precio,
                "thumbnail":x.thumbnail,
                "id":setId()
            }
            arrayProductos.push(productNew)
        })
    }
    else{
        const productNew = {
            "titulo":producto.titulo,
            "precio":producto.precio,
            "thumbail":producto.thumbnail,
            "id":setId()
        }
        arrayProductos.push(productNew)
    }

}

const setId = () => {
    let id = 1;
    if (arrayProductos.length > 0){
        //Si ya existen ID entonces buscaré el más grande y a ese le sumo uno, más que nada por si se saltean id's después no ocurran problemas.
        //Copio el arreglo de los productos
        let dataSorted = arrayProductos
        //Los ordeno en forma ascendente segun sus id's.
        dataSorted = dataSorted.sort((a,b) => {return b.id - a.id})
        //Selecciono el id mas alto
        id = dataSorted[0].id + 1
    }
    return id;
}


const removeProducto = (id) => {
    const indexOf = arrayProductos.findIndex(producto => producto.id == id)
    arrayProductos.splice(indexOf, 1)
}

const updateProducto = (id,producto) => {
    const indexOf = arrayProductos.findIndex(producto => producto.id == id)
    //Hecho asi para evitar pisar el id, y demas datos que vengan en el put que no se adecuen al modelo de producto que llevo.
    arrayProductos[indexOf].titulo = producto.titulo;
    arrayProductos[indexOf].precio = producto.precio;
    arrayProductos[indexOf].thumbail = producto.thumbail;
};
const getAll = () => {return arrayProductos};
const getById = (id) => {
    const producto = arrayProductos.find(x => x.id == id);
    return producto;
};

module.exports = {addProducto, removeProducto, updateProducto, getAll, getById}