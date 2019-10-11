function palindromo(palabra) {
    var pa = palabra
      .split("")
      .reverse()
      .join("");
    console.log(pa);
    if (pa === palabra) {
      console.log(" la palabra es un Palíndromo");
    } else {
      console.log(" la palabra no es un Palíndromo");
    }
  }