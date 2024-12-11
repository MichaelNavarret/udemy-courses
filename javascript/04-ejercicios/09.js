/**
 * Crea un algoritmo que devuelva un array de objetos en base a pares
 */

let pairs = [
  [1, { name: "Nicolas" }],
  [2, { name: "Felipe" }],
  [3, { name: "Chanchito" }],
];

function toCollection(arr) {
  let collection = [];
  for (idx in arr) {
    collection[idx] = { id: arr[idx][0], name: arr[idx][1].name };
  }
  return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);
