
class persona3{
    protected nombre:string;
    protected edad:number;
    constructor (nombre:string, edad:number){
        this.nombre= nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

class Empleado extends persona3{
    private sueldo:number;
        constructor(nombre:string, edad:number,sueldo:number){
            super(nombre,edad);
            this.sueldo=sueldo;
        }
        imprimir(){
            super.imprimir();
            console.log(`Sueldo: ${this.sueldo}`);
        }
        pagarImpuesto(){
            if(this.sueldo>5000)
            console.log(`${this.sueldo} debe pagar impuestos`);
            else
            console.log(`${this.sueldo} no debe pagar unpuestos`);
        }
}

const persona4=new persona3('juan',24)
persona4.imprimir();

const empleado1=new Empleado('ana',21,7000);
empleado1.imprimir();
empleado1.pagarImpuesto();