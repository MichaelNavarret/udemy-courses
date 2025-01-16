let a = 1;
let b = a;

b++;

console.log(a, b); //Two differents. This happend because the value of a is copied to b, so they are independent.

let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value++;

console.log(obj1, obj2); // Two equals. This happend because the reference of obj1 is copied to obj2, so they are the same object.

// Using functions ==================
let c = 1;

function increase(d) {
  d++;
}

increase(c);

console.log(c); // 1. This happend because the value of c is copied to d, so they are independent.

let obj3 = { value: 10 };

function increase(obj) {
  obj.value++;
}
console.log(obj3); // 11. This happend because the reference of obj3 is copied to obj, so they are the same object.
