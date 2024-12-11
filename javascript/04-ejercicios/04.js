/**
 * Crear algoritmos que impriman números impares del 0 al 10
 */

function printImparNumbersWithFor() {
  console.log("Using for:");
  for (num = 0; num <= 10; num++) {
    if (num % 2 !== 0) {
      console.log(`Impar ${num}`);
    }
  }
}

function printImparNumbersWithWhile() {
  console.log("Using while:");
  let num = 0;
  while (num < 10) {
    if (num % 2 !== 0) {
      console.log(`Impar ${num}`);
    }
    num++;
  }
}

printImparNumbersWithFor();
printImparNumbersWithWhile();
