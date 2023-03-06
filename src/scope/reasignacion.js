/* Declaramos, asignamos y mostramos una variable*/

var firstName; // Undefined
firstName = "Daniel";
console.log(firstName);

var lastName = "Useche"; // declarar / asignar
lastName = "Perdomo"; // reasignando
console.log(lastName);

// re declarar con var(malas practicas)
var secondName = "Felipe"; // declarar / asignar
var secondName = "Ana"; // redeclarando
console.log(secondName);

// let
let club = "Manchester United";
club = "Liverpool";
console.log(club);

// cuando quiero re declarar no va ser posible con let. DARA UN ERROR
// let club = "PSG";
// console.log(club);

// const => No podemos reasignar con const datos primitivos
const animal = "dog"; //declara y asignar
animal = "cat"; //reasignando
console.log(animal);

// cons trabajando con array
const vehicles = [];
vehicles.push("Hyundai Veloster");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

/* NOTA: Con const puedo re-asignar arrays y objetos pero no re-declararlos */
