const fs= require('fs')
const colors=require('colors')

const crearArchivoTabla = async (base=5, listar=false, hasta=10) => {
    try {
        

        let salida='';
        let consola='';

        for(let i=1; i<=hasta; i++){
            salida +=`${base} X ${i} = ${base * i}\n`;
            consola+=`${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(listar===true){
            console.log('===================='.green)
            console.log(`    TABLA DEL `.green, colors.blue(base))
            console.log('===================='.green)
            console.log(consola)
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        console.log(`Archivo tabla-${base}.txt creado`)
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
}

module.exports={
    crearArchivoTabla
}