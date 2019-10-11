var numero = [1, 2, 4, 5, 5, 5, 6, 3];

function ocurrencias(lista) {
   let cont = 0;
   for (let i = 0; i < numero.length; i++) {
   if (numero[i] == lista) {
      cont = cont + 1;
    }
  }
  console.log("el numero " + numero + " se repite " + cont + " veces");
}

ocurrencias(5)