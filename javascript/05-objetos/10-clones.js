let punto = {
  x: 10,
  y: 15,
};

let referenciaPunto = Object.assign(punto, { z: 20 });
let puntoClonado = Object.assign({}, punto, { z: 20 });
console.log(punto, puntoClonado);

let copiaPunto = Object.assign({}, punto);
console.log(punto, copiaPunto);

let copiaPunto2 = { ...punto };
console.log(punto, copiaPunto2);

let copuaPunto3 = {};
for (let key in punto) {
  copuaPunto3[key] = punto[key];
}
console.log(punto, copuaPunto3);
