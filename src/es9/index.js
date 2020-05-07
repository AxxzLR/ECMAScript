//Operador de reposo, el cual extrae las propiedades
//de un objeto que aun no se ha construido
const obj = {
    name: 'Axel',
    age: 24,
    country: 'MX'
}

//obtenemos name  en una variable y el resto del objeto
//en la variable all (el resto que no se halla asignado)
let { name, ...all } = obj;
console.log(name, all)


//propiedades de propagacion
const obj1 = {
    name: 'Axel',
    age: 24,
}

const obj2 = {
    ...obj1,
    country: 'MX'
}

console.log(obj2)

//promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        //diferente forma de hacer condicional
        (true)
            ? setTimeout(() => resolve('Helo World'), 3000)
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))//ejecuta una funcion al terminar la promesa

//regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]//inicia en 1
const month = match[2]
const day = match[3]
console.log(year, month, day)