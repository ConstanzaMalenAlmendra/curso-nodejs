const { describe } = require('yargs');

const argv=require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:"Es la base de la tabla de multiplicar"
    }).check((argv, options)=>{  
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        return true
      })
    .option('l',{
        alias:'listar',
        demandOption:true,
        type:'boolean',
        default:false,
        describe:'Muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        demandOption:true,
        type:'number',
        default:10,
        describe:'Limite de la tabla de multiplicar'
    })
    .argv

    module.exports=argv;
    