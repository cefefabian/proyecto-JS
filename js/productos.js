
let price = document.querySelector('.price')
let precioEnLS = localStorage.getItem('precio')
precioEnLS = price.innerHTML = `Total a pagar ${precioEnLS}$`

const btnComprar = document.querySelector('.btn-comprar')

let inputNombre = document.querySelector('.input-nombre')
let inputTarjeta = document.querySelector('.input-tarjeta')
let inputEmail = document.querySelector('.input-email')
let inputCvu = document.querySelector('.input-cvu')
let inputs = document.querySelectorAll('.input')
inputs.forEach((finalizarCompra) =>{

  finalizarCompra.addEventListener('keydown', ()=>{
      btnComprar.removeAttribute('disabled')
  })
})


btnComprar.addEventListener('click', ()=>{
    let nombre = inputNombre.value;
    Swal.fire({
        icon: "success",
        text: "Gracias por su compra" + ' ' + nombre
    })
    inputEmail.value = ''
    inputTarjeta.value = ''
    inputCvu.value = ''
    inputNombre.value = ''
    btnComprar.setAttribute('disabled', true)
   
})






    

