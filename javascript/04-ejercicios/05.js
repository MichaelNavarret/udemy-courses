/**
 * Algoritmo que devuelva numero menor y mayor de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(array) {
  let menor = array[0];
  let mayor = array[0];

  //   for (idx = 0; idx < array.length; idx++) {
  //     if (array[idx] < menor) {
  //       menor = array[idx];
  //     }
  //     if (array[idx] > mayor) {
  //       mayor = array[idx];
  //     }
  //   }

  for (num of array) {
    if (num < menor) menor = num;
    if (num > mayor) mayor = num;
  }
  return [menor, mayor];
}

let numeros = getMenorMayor(array);

console.log(numeros);
