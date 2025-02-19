const saludo = "Hola Mundo!";

console.log("Length:", saludo.length); // 11
console.log("Index Of: (Mundo) ", saludo.indexOf("Mundo")); // 5
console.log("Includes: (Mundo) ", saludo.includes("Mundo")); // true
console.log("Includes: (mxxndo) ", saludo.includes("mxxndo")); // false

let newSaludo = saludo.replace("Mundo", "Coders");
console.log("Replace:", newSaludo, " / Original:", saludo); // Hola Coders! / Hola Mundo!

console.log("To Upper Case:", saludo.toUpperCase()); // HOLA MUNDO!
console.log("To Lower Case:", saludo.toLowerCase()); // hola mundo!

console.log("SubString:", saludo.substring(5)); // Mundo!
console.log("SubString:", saludo.substring(5, 9)); // Mundo
