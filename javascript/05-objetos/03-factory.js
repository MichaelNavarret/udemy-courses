function generateUser(id, name, email) {
  return {
    id,
    email,
    name,
    activo: true,
    recuperarClave: function () {
      //funcion anonima
      console.log("Recuperando clave...");
    },
  };
}

const user1 = generateUser(1, "Juan", "juan@gmail.com");
const user2 = generateUser(2, "Pedro", "pedro@gmail.com");

console.log(user1, user2);
