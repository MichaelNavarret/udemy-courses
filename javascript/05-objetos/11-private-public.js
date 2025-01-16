function Usuario() {
  let id = 1;
  this.name = "Michael";
  let log = function () {
    console.log("Loggin...");
  };
  this.guardar = function () {
    log();
    console.log("Guardando usuario... " + this.name);
  };
}

const usuario = new Usuario();
usuario.guardar();
