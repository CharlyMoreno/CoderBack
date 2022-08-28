//Creo la clase Usuario
class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
//Retorna un string con el nombre y apellido juntos
    getfullName() {
        return `${this.nombre} ${this.apellido}` 
    }
//Añade una mascota al array
    addMascotas(nombre){
        this.mascotas.push(nombre)
    }
//Devuelve la cantidad de mascotas que tiene el user
    countMascotas(){
        return this.mascotas.length
    }
//Añade un libro al array de libros
    addBook(nombre,autor){
        const libro = {
            'nombre':nombre,
            'autor': autor
        }
        this.libros.push(libro)
    }
//Devuelve un array con SOLAMENTE el nombre de los libros.    
    getBookNames(){
        let arrayNames = [] 
        this.libros.map((libro)=>{
            arrayNames.push(libro.nombre)
        })
        return arrayNames
    }

// Falta hacer los Get's y Set's de todos los atributos.
    getName(){return this.nombre}
}

//Creo una instancia de Usuario
const p1 = new Usuario('Carlos','Moreno',
[{"nombre":"La Batalla del Futuro", "autor":"Mateo Salvatoo"}, {"nombre":"El dilema humano", "autor":"Joan Cwaik"}],
['Bianca']);

//Añado mascotas
p1.addMascotas('Lupe')
//Añado libros
p1.addBook('Sobrevivir al Presente','Santiago Bilinkis')
p1.addBook('2050','Katja Alemann')

//Mostrar datos por consola
console.log(`Nombre y Apellido: ${p1.getfullName()}`)
console.log(`${p1.getName()} tiene ${p1.countMascotas()} mascotas.`)
console.log(p1.getBookNames())