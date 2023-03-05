// Variables

var a; //declarando
var b = "b"; //declaramos / asignamos
b = "bb"; // reasignacion
var a = "aa"; // redeclaracion

/*  GLobal Scope
 Cualquier variable que se encuentre en el documento sin estar dentro de un bloque o funcion,
 sera una variable global y se instanciara dentro del objeto window.
 Asi podremos acceder donde queramos a estas funciones/variables segun sea el caso 
*/

var club = "Liverpool"; // global
console.log(club);

function bestClub() {
  console.log(club);
}

bestClub();

function countries() {
  country = "Medellin"; // Asigno el valor pero no he declarado la variable -> global
  console.log(country);
}

countries();
console.log(country);
