/*autor: DcRubik
	fecha: 24_04_2023*/

var texto = prompt("Introduzca una palabra: ");
let palindromo = true;
texto = texto.toLowerCase().replace(/\s/g, "");
for (i = 0; i < texto.length / 2; i++) {
  if (texto[i] !== texto[texto.length - 1 - i]) {
    palindromo = false;
    break;
  }
}

if (palindromo) {
  alert("La palabra introducida es un palíndromo.")
} else {
  alert("La palabra introducida no es un palíndromo.")
}
