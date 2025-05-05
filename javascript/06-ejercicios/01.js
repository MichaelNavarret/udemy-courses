function User(name) {
  this.name = name;
  this.id = Math.random() * (10 - 1) + 1;
}

const user1 = new User("Michael");
const user2 = new User("Fernanda");
console.log(user1, user2);
