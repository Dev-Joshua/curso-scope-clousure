/* Alcancia logica normal */

// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins; // asignar en forma de adicion

//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(8);

// Alcancia con closure
function moneyBox() {
  let saveCoins = 0;

  //Aqui esta mi ambito lexico
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`); // accedo dentro de otra funcion(hijo) sobre la variable asignada en la funcion padre
  }
  return countCoins;
}

// cuando la instnciee puedo pasarle el argumento coins
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(15);
myMoneyBox(5);

// instancia de moneybox
const moneyBoxDeAna = moneyBox();
moneyBoxDeAna(10);
moneyBoxDeAna(20);
moneyBoxDeAna(5);

/* Accediendo a la variable saveCoins con el ambito lexico puedo hacer adicion para que muestre la alcancia de manera correcta*/
