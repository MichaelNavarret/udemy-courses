/**
 * Crear un algoritmo que tome un array de objetos y devuelva un array de pares
 */

let array = [
  {
    id: 1,
    name: "Nicolas",
  },
  {
    id: 2,
    name: "Felipe",
  },
  {
    id: 3,
    name: "Chanchito",
  },
];

function toPairsWithForOf(arr) {
  let pairs = [];

  for (obj of arr) {
    //For Of devuelve el objeto
    pairs.push([obj.id, obj]);
  }

  return pairs;
}

function toPairsWithForIn(arr) {
  let pairs = [];

  for (idx in arr) {
    //For In devuelve el indice
    const obj = arr[idx];
    pairs[idx] = [obj.id, obj];
  }
  return pairs;
}

let resultado = toPairsWithForOf(array);
console.log(resultado);
