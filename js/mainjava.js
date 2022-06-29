
let usuario = prompt ('Ingrese su nombre')

nombres = []

nombres.push(usuario);
for (const nombre of nombres) {
    let saludo = document.querySelector(".caja h1")
    saludo.innerHTML = `${nombre} bienvenido a milkaShop`;

}


const botonComprar = document.querySelectorAll('.comprar')

const carrito = document.querySelector('.carrito')


botonComprar.forEach((comprar) => {
    comprar.addEventListener('click', alCarrito);
    });

    function alCarrito(evento) {
        const boton = evento.target;
        const tarjeta = boton.closest('.tarjeta')

        const tarjetaTitulo = tarjeta.querySelector('.tarjeta-titulo').textContent;
        const tarjetaPrecio = tarjeta.querySelector('.precio').textContent;
        const tarjetaImg = tarjeta.querySelector('.tarjeta-img').src;

        const chocolateNuevo = document.createElement('div');
        chocolateNuevo.classList.add ('carrito-compra')
        const contenidoTajeta = ` <div class="carrito-img">
                                    <img src=${tarjetaImg} alt="">
                                 </div>
                                <div class="carrito-titulo">
                                  <h4>${tarjetaTitulo}</h6>
                                 </div>
                                 <div class="carrito-precio">
                                   <h4>${tarjetaPrecio}</h6>
                                 </div>
                                 <div class="carrito-cancelar">
                                   <input type="number" value="1">
                                  <button>
                                     X
                                   </button>
                                 </div>`;
 
         chocolateNuevo.innerHTML = contenidoTajeta;
         carrito.append(chocolateNuevo);
    }

