let resultado = 750;
let cuantos = parseInt(prompt('Elige cuantos chocolates queres'))
    

if (cuantos <= 10){
    for (let i = 750; cuantos > 0 ; i++) {
        let resultado = i *cuantos;
        alert('El precio a pagar es de ' + resultado + ' pesos')
        break;
    }
}

else {
    alert('El maximo son 10')
}
