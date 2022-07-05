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


let logoCarrito = document.querySelector('.logo')
logoCarrito.innerHTML = `<p class="contador">0</p>
`

const claseLogoCarrito = document.querySelector('.contador').textContent
let btnCarrito = document.querySelector('#productos');
let contador = document.querySelector(".contador")
let sumar = 1;

document.querySelector(".contador").innerText;
if(claseLogoCarrito === '0'){
  logoCarrito.hidden = true
  contador.hidden = true
}
btnCarrito.addEventListener("click", function (e) {
  if(e.target.className === "comprar"){
    logoCarrito.hidden = false
  contador.hidden = false
	contador.innerText = parseInt(contador.innerText) + sumar;
  }
  
});

let tarjetaTitulo = document.querySelector('.tarjeta-titulo').textContent

let main = document.querySelector('main')

btnCarrito.addEventListener('click', (e) =>{
  if (e.target.className === "comprar") {
  const alert = document.querySelector('#alert')
  alert.innerHTML = `<div class= "alert">
                        <h3>Chocolate ${tarjetaTitulo} añadido al carrito</h3>
                      </div>`
                               
  setTimeout(function () {
    alert.classList.add("visible");
  }, 2000);
  alert.classList.remove("visible");
  }
})



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

        htmlCarrito(tarjetaTitulo, tarjetaPrecio, tarjetaImg)
    }


      function htmlCarrito(tarjetaTitulo, tarjetaPrecio, tarjetaImg) {
        
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
                                   <input class="cantidad" type="number" value="1">
                                  <button>
                                     X
                                   </button>
                                 </div>`;
 
         chocolateNuevo.innerHTML = contenidoTajeta;
         carrito.append(chocolateNuevo); 

         totalDelCarrito()
      }

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
      
        precioTotalDelCarrito.innerHTML = `Total ${total}$`;
      }
      
      
    
    

