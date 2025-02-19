const ahora = new Date();
console.log("Ahora: ", ahora);

const fecha = new Date("December 11 1986 14:15 GMT-0300"); // 11 de diciembre de 1986 a las 14:15
console.log("Fecha: ", fecha);

const fecha2 = new Date(1986, 11, 11, 14, 15); // 11 de diciembre de 1986 a las 14:15
console.log("Fecha2: ", fecha2);

const fecha3 = new Date(1986, 11, 11, 14 + 15, 15); // 12 de diciembre de 1986 a las 5:15
console.log("Fecha3: ", fecha3);

console.log("DateString", fecha3.toDateString());
console.log("ISOString", fecha3.toISOString());
console.log("TimeString", fecha3.toTimeString());
