/**
 * Crear un algoritmo que genere un Array de longitud N, y que sus elementos sea numeros de 1 hasta N.
 */

let longitud = 7;

function crearArry(n) {
  if (n <= 0) return [];
  let array = [];
  for (idx = 1; idx <= n; idx++) {
    array[idx - 1] = idx;
  }
  return array;
}

let resultado = crearArry(longitud);
console.log(resultado);
