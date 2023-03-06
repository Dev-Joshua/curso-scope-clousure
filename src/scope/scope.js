/* Function Scope */
/* 
Todas y cada una de las funciones que hagamos dentro de la logica del programa van a tener su propio alcance y las variables
declaradas dentro de esta funcion van a ser accesibles solamente dentro de esta funcion y cualquiera de sus funciones anidadas.
*/

function greeting() {
  let userName = "Tanjiro";
  console.log(userName);

  if (userName === "Tanjiro") {
    console.log(`Hello ${userName}!`);
  }
}

greeting();

// si quiero acceder a esta variable no sera posible porque no esta asignada como global. El alcance sera solo dentro de esa funcion
console.log(userName);
