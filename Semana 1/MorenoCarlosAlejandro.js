class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getfullName() {
        return `${this.nombre} ${this.apellido}` 
    }

    addMascotas(nombre){
        this.mascotas.push(nombre)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre,autor){
        const libro = {
            'nombre':nombre,
            'autor': autor
        }
        this.libros.push(libro)
    }
    getBookNames(){
        let arrayNames = [] 
        this.libros.map((libro)=>{
            arrayNames.push(libro.nombre)
        })
        return arrayNames
    }
}


const p1 = new Usuario('Carlos','Moreno',[{"nombre":"Librito"}],[{"nombre":"Hola"},{"nombre":"Chau"}]);

p1.addMascotas('Bianca')
p1.addMascotas('Lupe')

console.log(p1.getfullName())
console.log(p1.countMascotas())

p1.addBook('Libro1','')
p1.addBook('Libro2','')

console.log(p1.getBookNames())