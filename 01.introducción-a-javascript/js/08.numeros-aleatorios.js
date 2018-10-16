var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;
/*==========================================
=            NÚMEROS ALEATORIOS            =
==========================================*/

// EL OBJETO MATH PERMITE REALIZAR TAREAS MATEMÁTICAS EN LOS NÚMEROS
// Math.random = devuelve un número aleatorio entra 0 (inclusive), y 1 (exclusivo)
// Math.floor = redondea al número menor del decimal
// Math.ceil = redondea al número mayor del decimal
// Math.round = devuelve el valor de x redondeado a su número entero más proximo

numero = Math.round((Math.random() * 10));
numeroAleatorio.innerHTML = numero;
