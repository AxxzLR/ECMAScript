const hello = () => { return 'Hello!' }

//export default hello() //posible problema la sintaxis de módulos ES6 no está soportada aún por la versión de Node LTS
module.exports = hello