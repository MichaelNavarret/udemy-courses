function similares(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let i = 0; i < obj1Keys.length; i++) {
    if (obj1Keys[i] !== obj2Keys[i]) {
      return false;
    }
    if (obj1[obj1Keys[i]] != obj2[obj1Keys[i]]) {
      return false;
    }
  }

  return true;
}

let resultado = similares(
  { id: 1, name: "Michael" },
  { id: 1, name: "Fernanda" }
);

console.log(resultado);
