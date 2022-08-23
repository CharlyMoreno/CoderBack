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