
interface Alumno{
    matricula:number;
    nombre: string;
    email: string;
    edad: number;

}

const alumno:Alumno={
    matricula: 14000662,
    nombre:'Fernando',
    email:'fernandoguzman623@gmail.com',
    edad:27
   
}

let mascotas=['perro', 'gato', 'perico']
console.table(mascotas);
mascotas[1]='otro gato';
mascotas.push('Perico rojo')
console.table(mascotas);