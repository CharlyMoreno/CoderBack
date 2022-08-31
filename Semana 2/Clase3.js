//Guardo la funcion
const sumar = (a,b) => a+b;
//Guardo lo que devuelve la funcion. UN VALOR
const suma = sumar(2,3)

console.log(suma)

//OTROS EJEMPLOS
//Un solo parametro, no necesita parentesis
const dobleDe = a => a*2

//Sin parametros se puede obviar los () y poner _
//Retorno implicito cuando deuvelvo objetos con ()
const getPersona = _ => ({"nombre":"Charly"});

console.log(dobleDe(4))
console.log(getPersona())


//Callback => Consiste en enviar una funcion como parametro en otra
function mostrarHola(){
    console.log('Hola')
}
function mostrarChau(){
    console.log('Chau')
}
const ejecutora = funcion => funcion()
ejecutora(mostrarHola)
ejecutora(mostrarChau)


setInterval(_=>{console.log('hola')},3000)