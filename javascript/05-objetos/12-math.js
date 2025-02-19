console.log(
  Math.PI, // 3.141592653589793
  Math.abs(-15), // 15
  Math.round(15.5), // 16
  Math.round(15.4), // 15
  Math.floor(15.9), // Always round down 15
  Math.ceil(15.1), // Always round up 16
  Math.pow(2, 3), // 8, this is 2^3
  Math.sqrt(16) // 4, this is the square root of 16
);

console.log(Math.random());
console.log(getRandom(1, 10));

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
