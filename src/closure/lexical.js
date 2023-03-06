/* Ambito lexico */

const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  // Una ves definimos una funcion dentro de otra funcion sera un closure
  function parent() {
    // funcion interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }

  return parent();
}

myFunction();

/*JavaScript implementa este concepto de ambito lexico que no es más que la accesibilidad
  que vamos a tener de las variables anidadas dentro de funciones y como puedo con ellas llamarlas.

  Básicamente un closure es cuando usamos una variable de una funcion “padre” en una función “hijo”. 
  Además para que sea un closure estas funciones deben ser anidadas (“padre-hijo”)
*/
