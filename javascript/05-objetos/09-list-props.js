const punto = {
  x: 10,
  y: 20,
  dibujar() {
    console.log("Dibujando...");
  },
};

if ("dibujar" in punto) {
  punto.dibujar();
}

const keys = Object.keys(punto);
console.log(keys);

for (let key of Object.keys(punto)) {
  console.log(key, punto[key]);
}

for (let entry of Object.entries(punto)) {
  console.log(entry);
}

for (let key in punto) {
  console.log(key, punto[key]);
}
