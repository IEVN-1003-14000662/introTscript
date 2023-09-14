

   export interface Producto{

    desc:string;
    precio:number;
}

const telefono:Producto={

    desc:'sony erikson',
    precio:23923,
}

const tablet:Producto={
    desc:'ipad',
    precio:2398,
}

function CalcularIVA(producto:Producto[]):number{
let total=0;
producto.forEach((producto)=>{
    total+=producto.precio;
})
    return total+0.16
}

const articulos1=[telefono,tablet];
const iva1=CalcularIVA(articulos1);
console.log(`IVA: ${iva1}`);


/*-------------------------------------*/

export function CalcularIVA2(producto:Producto[]):[number,number]{
    let total=0;
    producto.forEach(({precio})=>{
        total+=precio;
    })
        return [total,total*0.16]
    }

    const articulos2=[telefono,tablet];
    const [total,iva]=CalcularIVA2(articulos2);
    console.log(`Total: ${total}`);
    console.log(`IVA: ${iva}`);