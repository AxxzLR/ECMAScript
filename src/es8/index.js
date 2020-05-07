//obect.entries
const data = {
    frontend: 'Axel',
    backend: 'karen',
    desing: 'Elizabeth', //Trailing Commas
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)
console.log(entries[0].length)

const values = Object.values(data)
console.log(values)
console.log(values.length)

//padding
const string = 'hello'
console.log(string.padStart(8, '!_'))
console.log(string.padEnd(12, '*_'))


//Async Await

//Se genera promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        //diferente forma de hacer condicional
        (false)
            ? setTimeout(() => resolve('Helo World'), 3000)
            : reject(new Error('Test Error'))
    })
}

//Esta funcion implementa async
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    }
    catch (error) {
        console.log(error)
    }

}

anotherFunction()