//console.log("Hola Mundo")
//console.log (5+5)

// alert sirve para dar un mensaje al momento de refrescar la pagina
alert ("ALERT: Este es el mensaje que aparece al refrescar (F5)")

let contador = 0;
let limite = 5;


// Hacer referencia a los elementos que vamos a maniipular
// Los guardamos en constantes, porque no deberia modificarse

const boton = document.getElementById("contador")
const numero = document.getElementById("numero")

function sumaClick () {
    // El if le da el limite al boton, una vez que llega al limite bloquea (disabled) el boton
    if (contador > 3){ 
                      boton.setAttribute("disabled" , "true")
                     }
    contador=contador + 1;
    numero.textContent = contador  // Propiedad .texContent es el contenido que tiene el numero

    // EXPLICA A LAS 20:53 APROX. El numero es un elemento HTML, entras al contenido que tenga el elemento
    // 21:03 aprox explica mas elementos - innerText e innerHTML
    numero.innerText = contador
    
    // Ejemplo de como añadir un HTML a un elemento
    //numero.innerHTML = "<p> HEYYY </p>"
}

// .addEventListener sirve para añadir una escucha de eventos (es un metodo, todo metodo necesita un  () )
boton.addEventListener("click", sumaClick)

// -- CAMBIAR EL COLOR --

const inputColor = document.getElementById ("colorSelector")

// Cuando hay un evento dentro de un evento se pone como parametro en la funcion. Se usa porque se consigue un valor de un input, el input capta los cambios
function changeColor (event){

    // El body de mi html: document.body.style.backgroundColor
    // El input que estoy usando event.target.value
    document.body.style.backgroundColor = event.target.value

}

//inputColor.addEventListener("input" , (e) => changeColor(e) ) Tambien se puede hacer de esta manera

inputColor.addEventListener("input" , changeColor)

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