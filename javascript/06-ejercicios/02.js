function createUser(name) {
  return {
    name,
    id: Math.random() * (10 - 1) + 1,
  };
}

const user1 = createUser("Michael");
const user2 = createUser("Fernanda");
console.log(user1, user2);
