

interface Reproductor{

    volumen: number;
    segundos: number;
    canciones: string;
    detalles: Detalles;
    
}

interface Detalles{
    cantantes: string;
    year: number;
}

const reproductor : Reproductor={
    volumen:90,
    segundos:30,
    canciones:'Mañanitas',
    detalles:{
        cantantes:'Cepillin',
        year:1976
    }
}

/*
console.log(`Que cancion es : ${reproductor.canciones}`);
console.log(`El volumen actual es : ${reproductor.volumen}`);
console.log(`El cantante es : ${reproductor.detalles.cantantes}`);
console.log(`Los segundos son : ${reproductor.segundos}`);
*/

const{volumen,detalles}=reproductor
const{cantantes}= detalles
console.log(`El volumne actual es: ${volumen}`);
console.log(`El cantante es: ${cantantes}`);


const colores:string[]= ['red', 'blue', 'green', 'pink'];
console.log(`color1: ${colores[0]}`)
console.log(`color2: ${colores[1]}`)
console.log(`color3: ${colores[2]}`)
console.log(`color4: ${colores[3]}`)

const[a,,,b]=colores;

console.log(`Color: ${a}`)
console.log(`Color: ${b}`)