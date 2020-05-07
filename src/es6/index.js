//#region ------Clase 1
//Default Params
//anteriormente en ECMAScript 5 se realizaba de la siguiente forma
function newFunction(name, age, country) {
    var name = name || 'Axel'
    var age = age || 24
    var country = country || 'MX'
    console.log(name, age, country)
}

//En ECMAScript 6 se realiza de la siguiente forma
function newFunction2(name = 'Axel', age = 24, country = 'MX') {
    console.log(name, age, country)
}

newFunction()
newFunction2()
newFunction('Karen', 25, 'Mexico')

//Concatenacion
let hello = 'Hello'
let world = 'World'
//concatencacion anterior en ECMAScript 5
let epicPhrase = hello + ' ' + world
//Nueva concatencacion en ECMAScript 6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase)
console.log(epicPhrase2)
//#endregion

//#region ------Clase 2
//Multilinea
//Anteriormente en ECMAScript 5  el salto de linea se hacia de la siguiente forma
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
    'otra frase epica que necesitemos.'
console.log(lorem)
// en ECMAScript 6 utilizando el Template string
let lorem2 = `otra frase epica
ahora es otra frase epica`
//nota considera saltos de linea, tabilacionesy parametros como \n
console.log(lorem2)


//Destructuracion de objetos
let person = {
    name: 'Axel',
    age: 24,
    country: 'MX'
}

//anteriormente en ECMAScript 5 se accedia asi
console.log(person.name, person.age)
//En ECMAScript 6
//la desestructuracion nos permite ahorarrar lineas de codigo
//al salvar las propiedades de un objeto dentro de propiedades similes.

let { name, age, country } = person
console.log(name, country)

//Spread Operator
let team1 = ['Axel', 'Dani', 'Marcos']
let team2 = ['Karen', 'Angel', 'Daniel']
let education = ['Ceci', ...team1, ...team2]

console.log(education)


/*
    let y const

    Anteriormente en ECMAScript 5 se declaraban las variables con var
    var tiene un contexto global
    (se podia aceder a ella desde cualquier parte del codigo,
     sin importar en donde se halla declarado)

    En ECMAScript 6
    let a diferencia de var tiene un scope local, por lo cual si
    se declara dentro de un bloque esta no se puede acceder de forma global

    const declara una variable que no se podra modificar 
*/

var globalvar = 'Global var'

{
    let globalLet = 'Global let'
    console.log(globalLet)
}

console.log(globalvar)
//console.log(globalLet) //Error ya que let solo tiene scope local

const a = 'b'
//a='a' //No se puede reasignar el valor, ya que es tipo const
console.log(a)

//#endregion

//#region ------Clase 3
let name = 'Axel'
let age = 32

//Parametros en objetos
//Anteriormente en ECMAScript 5 se tenia que estructurar de la siguiente forma
obj = { name: name, age: age }
//en ECMAScript 6 es de la siguiente forma que nos permite ahorrar codigo
obj2 = { name, age }
console.log(obj2)

/*
    Arrow functions (tipo flecha)
    se utilizan par asolventar un problema particular o
    para trabajar con una sintaxis mas reducida y un this no vinculable
*/
const names = [
    { name: 'Axel', age: 24 },
    { name: 'Karen', age: 25 }
]
//en ECMAScript 5 se declaraba asi la funcion anonima en un map
let listOfNAmes = names.map(function (item) {
    console.log(item.name);
})
//en ECMAScript 6 las arrow function nos permiten hacer esto
//de una forma mas estructurada.
let listOfNames2 = names.map(item => console.log(item.name))

//Otra forma de declarar una arrow function
const listOfNAmes3 = (name, age, country) => {
    //Segmento de codigo
}

const square = num => num * num
//Las arrow functions son funciones anonimas


/*
    Promesas
    JS no es un lenguaje sincronico o que pueda ejecutar procesos en paralelo
    por lo cual, se generan llamdos asincronos esto generaban problemas como 
    el anidamiento de callbacks o callback Hell y se suluciono con las promesas
    las que nos aseguran que en un momento o tiempo sucedera algo.
*/

const helloPromise = () => {
    //la promesa necesita dos funciones Resolve y Reject
    return new Promise((resolve, reject) => {
        if (1 === 2) {
            resolve('Hey!')
        }
        else {
            reject('Ups!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(response => console.log('Hola'))
    .catch(error => console.log(error))
//#endregion

//#region ------Clase 4
//Aplicando POO
//Clases
class claculator {
    //Incializar la clase (variables disponibles en scope local)
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new claculator
console.log(calc.sum(2, 5))
//Modulos
//Podemos exportar metodos de otros archivos
//definiendo estos como exportables e importando al documento actual

//import { hello } from './module' //posible error la sintaxis de módulos ES6 no está soportada aún por la versión de Node LTS
const hello = require('./module')
console.log(hello())

//Generadores
/*
    Es una funcion especial que retorna una serie
    de valores segun el algoritmo definido
*/
//definiendo un generator
function* helloworld(){
    if(true){
        yield 'Hello, '
    }
    if(true){
        yield 'World'
    }
}

const generatorHello = helloworld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
//#endregion