function Usuario(nombre) {
  this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U("Michael");
console.log(user);

function of(Fn, args) {
  return new Fn(args);
}

let user1 = of(Usuario, "Fernanda");
console.log(user1);

function returned() {
  return function () {
    console.log("Hola mundo");
  };
}

const saludo = returned();
saludo();
