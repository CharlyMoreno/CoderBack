//Definir variables
let nombre = 'Pepe'
let edad = 25
let precio = 99.90
let nombreSeries = ['Dark','Mr.Robot','Castlevania']
let peliculasFav= [
    {
        'nombre':'Dark',
        'ano': 2020,
        'personajes': ['Personaje1','Personaje2','Personaje3']
    },
    {
        'nombre':'Mr.Robot',
        'ano': 2010,
        'personajes': ['Personaje1','Personaje2','Personaje3']
    },
]

console.log(nombre)
console.log(edad)
console.log(precio)
console.log(nombreSeries)
console.log(peliculasFav)

//Incrementar la edad en 1 y volver a mostrarla
edad += 1
console.log(edad)

//Agregar una serie a la lista y volver a mostrarla
nombreSeries.push('BreakingBad')
console.log(nombreSeries)


const objetoPersona = {
    "nombre":"Charly"
}

console.log(objetoPersona)

//Al ser un objeto constante no puedo modificar su estructura

// objetoPersona = {
//     "nombre":"Juan"
// }

// console.log(objetoPersona)

//Pero si puedo modificar el valor del atributo del objeto
objetoPersona.nombre = "Roberto"
console.log(objetoPersona)

//En JS los objetos se copian por referencia, y las variables primitivas por valor. Por ejemplo
objetoPersona2 = objetoPersona
objetoPersona.nombre = "Juan"

console.log(objetoPersona)
console.log(objetoPersona2)

edad = 21
edad2 = edad
edad = 30

console.log(edad)
console.log(edad2)

//Template String - ASCII Backtick ALT + 96 ``
console.log(`${objetoPersona.nombre} es una Persona`)