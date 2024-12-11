/**
 * Crea algoritmos que devuelva cantidad de numeros positivos de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
  let positiveCount = 0;

  for (num of arr) {
    if (num >= 0) {
      positiveCount++;
    }
  }

  return positiveCount;
}

let resultado = cuantosPositivos(array);

console.log(resultado);
