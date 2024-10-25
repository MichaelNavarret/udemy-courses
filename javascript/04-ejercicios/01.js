function cualEsMayor(a, b) {
  // Mi forma
  //   let mayor = a;
  //   if (b > a) {
  //     mayor = b;
  //   }
  //   return mayor;
  //------------------
  // Forma 02
  //   if (a > b) {
  //     return a;
  //   } else {
  //     return b;
  //   }
  // ----------------
  return a > b ? a : b;
}

let mayor = cualEsMayor(5, 10);

console.log(mayor);
