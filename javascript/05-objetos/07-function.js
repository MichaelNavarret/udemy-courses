function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando...");
  };
}

let punto = { z: 7 };
Punto.call(punto, 10, 20);
console.log(punto);
Punto.apply(punto, [15, 22]);
console.log(punto);
