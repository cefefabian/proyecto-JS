
let usuario = prompt ('Ingrese su nombre')

nombres = []

nombres.push(usuario);
for (const nombre of nombres) {
    let saludo = document.querySelector(".caja h1")
    saludo.innerHTML = `${nombre} bienvenido a milkaShop`;

}

const chocolates = [
    {id:1001, tipo: 'oreo', precio: 700},
    {id:1002, tipo: 'blanco', precio: 740},
    {id:1003, tipo: 'almendra', precio: 840},
    {id:1004, tipo: 'castaña', precio: 820},
    {id:1005, tipo: 'clasico', precio: 750},
    {id:1006, tipo: 'combinado', precio: 750}
];


function inventario(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        
    }
    
}

chocolates.sort((a, b) => {
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

console.log(chocolates)


const comprar = document.querySelector('#productos');

comprar.addEventListener('click', (e) => {
    if(e.target.className === "comprar"){
    console.log('comprado')
    }
});
