
let usuario = prompt ('Ingrese su nombre')
let email = prompt ('Ingrese su gmail')
let clave = prompt ('Ingrese su contraseña')
class registro{
    constructor(nombre, gmail, clave){
        this.nombre = nombre;
        this.gmail = gmail;
        this.clave = clave;
        this.bienvenida = function () {
            alert('Hola ' + this.nombre + '. Bienvenido a milkaShop!')
        }
    }
}

const login = new registro (usuario, email, clave)
console.log(login)
login.bienvenida()




let cuantos = parseInt(prompt('Elige cuantos chocolates queres cada uno tiene un valor de 750 pesos'))
let precio = 750;
if ((cuantos <= 10) && (cuantos > 0)){
    for (let i = 1; i <= 10; i++){
        let resultado = cuantos * precio;
        alert('El precio a pagar es de ' + resultado + ' pesos')
        break;
    }
}

else if (cuantos > 10)  {
    alert('El maximo son 10')
}

else {
    alert('Por favor ingrese cuantos chocolates desea')
}



const stock = [
    {id:1001, tipo: 'oreo', precio: 700},
    {id:1002, tipo: 'blanco', precio: 740},
    {id:1003, tipo: 'almendra', precio: 840},
    {id:1004, tipo: 'castaña', precio: 820},
    {id:1005, tipo: 'clasico', precio: 750},
    {id:1006, tipo: 'combinado', precio: 750}
];

inventario(stock)

function inventario(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        
    }
    
}

stock.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    else if (a.precio < b.precio) {
        return -1;
    }
    else {
        return 0;
    }
})

console.log(stock)





