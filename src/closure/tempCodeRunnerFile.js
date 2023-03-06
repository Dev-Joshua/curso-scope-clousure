function sumWithClosure(firstNum) {
  // Tu código aquí 👈
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