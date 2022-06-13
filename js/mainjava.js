
  
function nombre() {
    let nombreIngresado = prompt ('ingrese su nombre')
    alert('Hola ' + nombreIngresado + '. Bienvenido a milkaShop!')
}
nombre()


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

