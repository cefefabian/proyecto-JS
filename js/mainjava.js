let usuario

let usuarioEnLS = localStorage.getItem('usuario')

if (usuarioEnLS != null) {
  usuario = usuarioEnLS
} else {
  usuario = prompt('ingrese')
  localStorage.setItem('usuario', usuario)

}
let saludo = document.querySelector(".caja h1")
saludo.innerHTML = `${usuario} bienvenido a milkaShop`;

let tarjetaTitulo = document.querySelector('.tarjeta-titulo').textContent
let btnCarrito = document.querySelector('#productos');
let main = document.querySelector('main')

btnCarrito.addEventListener('click', (e) =>{
  if (e.target.className === "comprar") {
    Toastify({
      text: "Chocolate añadido al carrito correctamente",
      duration: 2500,
      className: 'alert'
      }).showToast();
  }                       
})

class Chocolates{
  constructor(tipo, precio, img){
    this.tipo = tipo,
    this.precio = precio,
    this.img = img
  }

}

const arrChocolates = []


const botonComprar = document.querySelectorAll('.comprar')

const carrito = document.querySelector('.carrito')


botonComprar.forEach((comprar) => {
    comprar.addEventListener('click', alCarrito);

    function alCarrito(evento) {
      const boton = evento.target;
      const tarjeta = boton.closest('.tarjeta')

        const tarjetaTitulo = tarjeta.querySelector('.tarjeta-titulo').textContent;
        const tarjetaPrecio = tarjeta.querySelector('.precio').textContent;
        const tarjetaImg = tarjeta.querySelector('.tarjeta-img').src;

        const Chocolate = new Chocolates(tarjetaTitulo, tarjetaPrecio, tarjetaImg)
        arrChocolates.push(Chocolate)
        generarHtml(arrChocolates)      
    }
  })


      function generarHtml(arr) {
        
        const chocolateNuevo = document.createElement('div');
        chocolateNuevo.classList.add ('carrito-compra')
        arr.map( el => chocolateNuevo.innerHTML = ` <div class="carrito-img">
                                    <img src=${el.img} alt="">
                                 </div>
                                <div class="carrito-titulo">
                                  <h4>${el.tipo}</h6>
                                 </div>
                                 <div class="carrito-precio">
                                   <h4>${el.precio}</h6>
                                 </div>
                                 <div class="carrito-cancelar">
                                   <input class="cantidad" type="number" value="1">
                                  <button class="eliminar">
                                     X
                                   </button>
                                 </div>`
        
        )
        carrito.append(chocolateNuevo)

        
        
        chocolateNuevo
          .querySelector('.eliminar')
          .addEventListener('click', eliminarChocolate) 
         

         chocolateNuevo
         .querySelector('.cantidad')
         .addEventListener('change', quantityChanged)
        
         totalDelCarrito()
      }
      const container = document.getElementsByClassName('carrito-compra')

      function totalDelCarrito() {
        let total = 0
        const precioTotalDelCarrito = document.querySelector('.preciototal')

        const tarjeta = document.querySelectorAll('.carrito-compra')

        tarjeta.forEach((tarjeta) => {
          const precioDelChocolate = tarjeta.querySelector('.carrito-precio')
          const soloPrecio = Number(precioDelChocolate.textContent.replace('$', ''));

          const cantidad = tarjeta.querySelector('.cantidad')
          const cantidad2 = Number(cantidad.value);

          total = total + soloPrecio * cantidad2
        });
      
        precioTotalDelCarrito.innerHTML = `Total 
        ${total}$`;
        
      }

      function eliminarChocolate(evento) {
        const botonEliminar = evento.target;
        botonEliminar.closest('.carrito-compra').remove()
        Toastify({
          text: "Chocolate eliminado del carrito correctamente",
          duration: 2500,
          className: 'alert'
          }).showToast();
        totalDelCarrito()
      }

      function quantityChanged(evento) {
        const input = evento.target;
        input.value <= 0 ? (input.value = 1) : null
        totalDelCarrito()
      }

      
    
    

