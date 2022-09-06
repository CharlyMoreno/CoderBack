const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

function getNombre(){
    let stringNombres = ""
    productos.forEach(element => {
        stringNombres += ` ${element.nombre},`
    });
    return stringNombres;
}

function precioTotal(){
    let precioTotal = 0
    productos.forEach(element => {
        precioTotal += element.precio
    });
    return precioTotal.toFixed(2);
}

function precioPromedio(){
    let total = precioTotal();
    let cant = productos.length + 1;
    let promedio = total / cant
    return promedio.toFixed(2); 
}

function sortedArray(metodo){
    let array = productos
    if(metodo == "menor") {
        array.sort((a, b) => a.precio - b.precio);
    }
    else if(metodo == "mayor"){
        array.sort((a, b) => b.precio - a.precio);
    }
    return array[0];
}


console.log(getNombre())
console.log(precioPromedio())
console.log(precioTotal())
console.log(sortedArray("mayor"))