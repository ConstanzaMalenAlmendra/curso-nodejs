const fs= require('fs')

const crearArchivoTabla = async (base=5) => {
    try {
        console.log('====================')
        console.log(`=== TABLA DEL ${base} ====`)
        console.log('====================')

        let salida='';

        for(let i=1; i<=10; i++){
            salida +=`${base} X ${i} = ${base * i}\n`;
        }

        console.log(salida)

        fs.writeFileSync(`tabla-${base}.txt`, salida)

        console.log(`Archivo tabla-${base}.txt creado`)
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
}

module.exports={
    crearArchivoTabla
}