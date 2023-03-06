/* 
  Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y 
  secuencialmente volver a llamarla para completar la suma con el siguiente número:

  La solución deberá tener un input y output como la siguiente, en algunos casos
  puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.
*/

function sumWithClosure(firstNum) {
  let number1 = firstNum;

  return function (secondNum) {
    let number2 = secondNum;
    if (!number2) {
      return number1;
    } else {
      return number1 + number2;
    }
  };
}
sumWithClosure(1, 2);
