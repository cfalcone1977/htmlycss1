


let contador = 1;
let limite = 5; // esta variable estable la cantidad clicks que se peude realizar antes de desabilitar el boton

// Hacer referencia a los elementos que vamos a manipular
// Los guardamos en constantes, porque no deberia modificarse

const boton = document.getElementById("contador");
const numero = document.getElementById("numero");
const botonAzul= document.getElementById("AZUL");
const botonRojo = document.getElementById("ROJO");
const botonVerde = document.getElementById("VERDE");
const cajabotones = document.getElementById("botonColores");
const ColorConInput=document.getElementById("cambioColorSeleccion");
let cuerpoPagina= document.body;
let colorUsado=document.getElementById("nombreColor");



function sumaClick () {
    // if que da limite al boton, una vez que llega al limite es desabilitado (disabled) el boton
    if (contador == 5){ 
                       boton.setAttribute("disabled" , "true");
                      }
    console.log(contador);                 
    numero.textContent = contador  // Propiedad .texContent (el contenido asume el valor de contador)
    // esto hace que el contenido de el elemento span muestr el valor de: contador
    contador=contador + 1;
    // EXPLICA A LAS 20:53 APROX. El numero es un elemento HTML, entras al contenido que tenga el elemento
    // 21:03 aprox explica mas elementos - innerText e innerHTML
    //numero.innerText = contador
    
    // Ejemplo de como añadir un HTML a un elemento
    //numero.innerHTML = "<p> HEYYY </p>"
}

function cambioColorFondo(color){
   cuerpoPagina.style.backgroundColor=color;
   colorUsado.textContent=color;
}

// .addEventListener sirve para añadir una escucha de eventos (es un metodo, todo metodo necesita un  () )
boton.addEventListener("click", sumaClick);

botonAzul.addEventListener("dblclick", () =>{
                                  cuerpoPagina.style.backgroundColor='blue';
                                  colorUsado.textContent='AZUL';
                                         });
botonRojo.addEventListener("click", () =>{
                                    cuerpoPagina.style.backgroundColor='red';
                                    colorUsado.textContent='ROJO';
                                         });
botonVerde.addEventListener("click", () =>{
                                    cuerpoPagina.style.backgroundColor='green';
                                    colorUsado.textContent='VERDE';
                                         });
//"input" es el formato de como se captura el evento en el addEventListener.
// event es el evento que devuelve cada vez que el puntero del mouse se detiene sobre un color!.
// event.target.value es el valor que tiene el evento en ese instante!.                                        
ColorConInput.addEventListener("input",(event) => {
                                     cuerpoPagina.style.backgroundColor = event.target.value;
                                     colorUsado.textContent=event.target.value;
                                                  });
    
cajabotones.addEventListener("mouseover",cambioColorFondo('yellow'));




//botonAzul.addEventListener("click", cambioColorFondo('blue')));
//botonRojo.addEventListener("click", cambioColorFondo('red')));
//botonVerde.addEventListener("click", cambioColorFondo('yellow'));

