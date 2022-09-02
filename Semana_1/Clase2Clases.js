// En este ejercicio construiremos una herramienta que permita que diferentes personas
// puedan llevar cuentas individuales sobre algo que deseen contabilizar, al mismo tiempo
// que nos brinde una contabilidad general del total contado. Para ello:
// 1) Definir la clase Contador.
// 2) Cada instancia de contador debe ser identificada con el nombre de la persona
// responsable de ese conteo.
// 3) Cada instancia inicia su cuenta individual en cero.
// 4) La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo
// contado por sus instancias, el cual también inicia en cero.
// 4) Definir un método obtenerResponsable que devuelva el nombre del responsable
// de la instancia.
// 5) Definir un método obtenerCuentaIndividual que devuelva la cantidad contada
// por la instancia.
// 6) Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por
// todos los contadores creados hasta el momento.
// 7) Definir el método contar que incremente en uno tanto la cuenta individual como la
// cuenta general

class Contador { 
    static cuentaGlobal = 0;
    constructor(nombre){
        this.nombre = nombre
        this.cuentaInd = 0
    }
    obtenerResponsable(){
        return this.nombre
    }
    obtenerCuentaIndividual(){
        return this.cuentaInd
    }
    static obtenerCuentaGlobal(){
        return Contador.cuentaGlobal
    }
    contar(){
        this.cuentaInd+=1
        Contador.cuentaGlobal+=1
    }
}

const c1 = new Contador('Juan')
const c2 = new Contador('Charly')
const c3 = new Contador('Franco')

c1.contar()
c2.contar()
c3.contar()
c1.contar()
c1.contar()

console.log(`Los contadores son: ${c1.nombre} - ${c2.nombre} - ${c3.nombre}`)
console.log(`Cuenta personal de ${c1.nombre}: ${c1.cuentaInd}`)
console.log(`Cuenta personal de ${c2.nombre}: ${c2.cuentaInd}`)
console.log(`Cuenta personal de ${c3.nombre}: ${c3.cuentaInd}`)
console.log(`Cuenta Total: ${Contador.obtenerCuentaGlobal()}`)