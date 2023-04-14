
const { crearArchivoTabla }=require('./helpers/multiplicar')
require('colors')
const argv =require('./config/yargs')

console.clear()

console.log(argv)
console.log('base yargs: ', argv.base)

//const base=3;

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo.rainbow,'creado'))
    .catch(err=>console.log(err))
