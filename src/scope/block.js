/* En ECMASCRIPT 6 se introdujeron las palabras reservadas let y const.
   Con las cuales se introdujo el concepto de block scope => El alcance de bloque significa que las variables definidas
   dentro de un bloque solo pueden ser utilizadas dentro de dicho bloque{}.
*/

function clubes() {
  if (true) {
    var club1 = "Manchester City"; // function scope(si puedo acceder a esta variable)
    let club2 = "Liverpool"; // block scope
    const club3 = "Manchester United"; // block scope

    console.log(club2);
    console.log(club3);
  }

  console.log(club1);
  // console.log(club2);
  // console.log(club3);
}

clubes();

/* Let y const solamente tendran alcance block scope */
