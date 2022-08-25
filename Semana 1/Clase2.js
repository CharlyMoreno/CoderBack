// 1) Definir la función mostrarLista que reciba una lista de datos y muestre su
// contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”.
// Luego, invocarla con datos de prueba para verificar que funciona bien en ambos
// casos.

function mostrarLista(lista){
    if(lista.length != 0) console.log(lista)
    else console.log('Lista vacia')
}

mostrarLista([]);
mostrarLista(['hola','chau','comoestas']);

// ------------------------------------------------------------------------------------

// 2) Definir una función anónima que haga lo mismo que la del punto 1, e invocarla
// inmediatamente, pasando una lista con 3 números como argumento.
(function(lista){
    mostrarLista(lista)
})([3,4,5]);


// ------------------------------------------------------------------------------------

// 3) Definir la función crearMultiplicador que reciba un número y devuelva una
// función anónima que reciba segundo número y dé como resultado el producto de
// ambos. Luego, a partir de la función definida, crear dos funciones duplicar y
// triplicar, y probarlas con diferentes valores.

function crearMultiplicador(n1){
    return function(n2){
        return(n1*n2)
    }
}

const duplicar = crearMultiplicador(2)
const triplicar = crearMultiplicador(3)

console.log(duplicar(5))
console.log(triplicar(3))
