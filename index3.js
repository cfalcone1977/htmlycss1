// -- Listado dinamico --

// Hacer referncia a los elementos que vamos a manipular

const lista = document.getElementById("lista")
const formulario = document.getElementById ("formulario")

function enviarFormulario(evento){
    // Previene comportamiento por defecto del formulario
    // El form refresca la pagina al ser enviado - submit
    evento.preventDefault();
    const item = document.getElementById ("item").value
    if (item){
               console.log (item)
               const li = document.createElement("li")    // Se crea un elemento HTML
               li.innerText = item
               // appendChild ingresa a la lista el nuevo list item con el texto
               lista.appendChild(li)
               formulario.reset() // Sirve para borrar el formulario una vez añadido a la lista
              }
}

formulario.addEventListener("submit" , enviarFormulario)

// 22:02 explica bien para que es .addEventListener