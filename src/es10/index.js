let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

console.log(array.flat(2)) //sobre la profundidad

let array = [1, 2, 3, 4, 5]

console.log(array.flatMap(value => [value, value * 2]))

//trim

let = hello ='    hello world      '
console.log(hello.trimStart())
console.log(hello.trimEnd())
console.log(hello.trim())
console.log(hello)


//opcional catch binding no necesita para el error como parametro en catch

//From entries transformar array a objetos
let entries = [['name', 'Axel'], ['age', '24']]
console.log(Object.fromEntries(entries))

//symbol
let mySymbol = 'My symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)