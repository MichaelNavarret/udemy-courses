let obj = {};
let obj2 = new Object();

/**
 * new Array() -> []
 * new Object() -> {}
 * new String() -> '' "" ``
 * new Number() -> 0
 * new Boolean() -> false
 */

function Usuario() {
  this.name = "Chanchito feliz";
}

let usuario = new Usuario();
console.log(usuario.constructor);
