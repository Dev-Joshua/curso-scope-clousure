function greeting() {
  let userName = "Daniel"; // asigno y declaro una variable

  function displayUserName() {
    return `Hello ${userName}`; // accedo a esa variable
  }

  return displayUserName; // retorno displayUserName
}

const g = greeting();
console.log(g); // este llamado retorna la funcion(), la definicion que tiene displayUserNAme
console.log(g()); // cuando la ejecutamos en el llamdo nos entrega el valor
