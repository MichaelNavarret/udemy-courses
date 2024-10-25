/**
 * Indice validar que no sea menor a cero y que el elemento exista en el array
 */

function getByIdx(arr, idx) {
  if (idx < 0) return "El indice no puede ser menor a 0";
  if (idx >= arr.length) return "El indice no existe dentro del arreglo";
  return arr[idx];
}

let resultado = getByIdx([1, 2], 1);

console.log(resultado);
