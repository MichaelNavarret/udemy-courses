function Usuario() {
  this.id = 1;
  this.recuperarClave = function () {
    console.log("recuperando clave...");
  };
}

const usuario = new Usuario();

console.log(usuario);
