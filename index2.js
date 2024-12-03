
// -- CAMBIAR EL COLOR --

const inputColor = document.getElementById ("colorSelector")
     
// Cuando hay un evento dentro de un evento se pone como parametro en la funcion. Se usa porque se consigue un valor de un input, el input capta los cambios
function changeColor(event){

    // El body de mi html: document.body.style.backgroundColor
    // El input que estoy usando event.target.value
    document.body.style.backgroundColor = event.target.value
    //

}
//inputColor.addEventListener("input" , (e) => changeColor(e) ) Tambien se puede hacer de esta manera

inputColor.addEventListener("input" , changeColor)

