/* Modo estricto fue incorporado en ECMASCRIPT 5 y permite ejecutar de forma estricta unas reglas
 para tener mejor control de la asignacion de variables y otros elementos clave para que el codigo cumpla con los estandares*/

//  asigno una variable
"use strict";
pi = 3.1416;
console.log(pi);

function myFunct() {
  "use strict";
  return (pi = 3.14);
}
console.log(myFunct);

/* Normalmente javascript leeria este codigo con un var pi; 
declarado al inicio del bloque, pero usando el 'use strict' el console.log arrojara un error
(malasPracticas no declarar y asignar una variable) */
