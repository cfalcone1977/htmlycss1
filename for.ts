/* fo
*/

let numeros, filtrado, mapeado: number[];
    numeros=[1,3,5,7,9,11];


//uso foreach Es un bucle que recorre el arreglo de principio a fin, ejecutando 
// una función proporcionada para cada elemento.
console.log(numeros);

numeros.forEach(element => {
    console.log(element);
});

//uso find buscar elementos en arreglos, devuelve el primer elemento que cumple la condición.  
let encontrado=numeros.find(numero => numero>10);

console.log(encontrado);

//uso filter crear un nuevo arreglo a partir de un arreglo existente, 
// pero filtrando solo aquellos elementos que cumplan una condición específica.

filtrado=numeros.filter(numero => numero >5);
console.log(filtrado);


//uso map, crea un nuevo arreglo aplicando una función a cada elemento del arreglo original.
mapeado=numeros.map(function(numero) {
                      numero= numero *2;
                      return numero;
                                     });

console.log(mapeado);




