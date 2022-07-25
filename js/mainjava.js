let usuario

let usuarioEnLS = localStorage.getItem('usuario')

if (usuarioEnLS != null) {
  usuario = usuarioEnLS
} 
else {
  usuario = prompt('ingrese')
  localStorage.setItem('usuario', usuario)

}
let saludo = document.querySelector(".caja h1")
saludo.innerHTML = `${usuario} Bienvenido a Milkashop`;

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

const divBienvenidaPadre = document.querySelector('#div-bienvenida-padre')

fetch('chocolates.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((alpes) => {
            const divBienvenida = document.createElement('div')
            divBienvenida.classList.add('alpes')
            divBienvenida.innerHTML = `
            <h4>${alpes.alpes}</h4>`
   
            divBienvenidaPadre.append(divBienvenida)
        })
    })

class Chocolates{
  constructor(tipo, precio, img, cantidad){
    this.tipo = tipo,
    this.precio = precio,
    this.img = img,
    this.cantidad = 1
  }

}
  
const arrChocolates = []

const botonComprar = document.querySelectorAll('.comprar')

const carrito = document.querySelector('.carrito')

const inputElemnto = carrito.getElementsByClassName("cantidad");




botonComprar.forEach((comprar) => {
    comprar.addEventListener('click', alCarrito);
  })

    function alCarrito(evento) {
      const boton = evento.target;
      const tarjeta = boton.closest('.tarjeta')
      
      const tarjetaTitulo = tarjeta.querySelector('.tarjeta-titulo').textContent;
      const tarjetaPrecio = tarjeta.querySelector('.precio').textContent;
      const tarjetaImg = tarjeta.querySelector('.tarjeta-img').src;
      
      for (let i = 0; i < arrChocolates.length; i++) {
        if (arrChocolates[i].tipo.trim() === tarjetaTitulo.trim()){
          inputElemnto[i].value++          
          totalDelCarrito()
          return;
        }}

      const Chocolate = new Chocolates(tarjetaTitulo, tarjetaPrecio, tarjetaImg)
      arrChocolates.push(Chocolate)
        generarHtml(arrChocolates)    
        
      }   

   
    function generarHtml(arr) {    
      const chocolateNuevo = document.createElement('div');
      chocolateNuevo.classList.add ('carrito-compra')
      const contenerdorCarritoPadre = document.querySelector('.contenedor-carrito-padre')
      
      contenerdorCarritoPadre.append(chocolateNuevo)
        arr.map((el) => chocolateNuevo.innerHTML = ` <div class="carrito-img">
                                    <img src=${el.img} alt="">
                                 </div>
                                <div class="carrito-titulo">
                                  <h4>${el.tipo}</h4>
                                 </div>
                                 <div class="carrito-precio">
                                   <h4>${el.precio}</h4>
                                 </div>
                                 <div class="carrito-cancelar">
                                   <input class="cantidad" min="1" type="number" value=${el.cantidad}>
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
     
        botonDesactivado()
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
             
        function preciototal() {
          localStorage.setItem('precio', total)  
      }
        preciototal()
  
      }

      function eliminarChocolate(evento) {
        const botonEliminar = evento.target;
        botonEliminar.closest('.carrito-compra').remove()
        arrChocolates.length = 0;
        
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

    function botonDesactivado() {
      const btnn = document.querySelector('.compra-final-input')
      if (arrChocolates.length != 0) {
        btnn.removeAttribute('disabled')
        btnn.classList.add('btnn')
      }
    }
 window.addEventListener('scroll', ()=>{
  window.onscroll = ()=> {
    let scroll =document.documentElement.scrollTop
    if (scroll > 100) {
      document.getElementById('saludo').style.top = '-120px';
      
    }else{
      document.getElementById('saludo').style.top = '0';
    }
    
  };
 })





console.log(arrChocolates);




  


      
        
      

    
    

