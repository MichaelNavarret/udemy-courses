const user = { id: 1 };

user.name = "Michael";
user.guardar = function () {
  console.log("Guardando...", user.name);
};

user.guardar();

//Borrar propiedades
delete user.name;
delete user.guardar;

console.log(user);

//Frezear un objeto. No se pueden agregar, borrar o modificar propiedades
const userFreeze = Object.freeze(user);
userFreeze.name = "Michael";
//This not display error, but not change the value
console.log(userFreeze);

//Seal permite modificar propiedades pero no agregar ni borrar
const userSeal = Object.seal({ id: 1 });
userSeal.name = "Michael";
userSeal.email = "email";
userSeal.id = 2;
//This not display error. The object not add the property email and name, but change the value of id.
console.log(userSeal);
