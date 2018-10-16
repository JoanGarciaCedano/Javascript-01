var tiempo = document.querySelector("#tiempo");
var segundos = 0;

/*==================================
SET INTERVAL (Intervalo de tiempo)
setInterval(function, time);
==================================*/

var intervalo = setInterval(function(){

	segundos++;

	tiempo.innerHTML = segundos;

}, 1000);

/*==================================
SET TIME OUT (Retardo de tiempo)
setTimeout(function, time);
==================================*/

setTimeout(function(){

  // DETENEMOS Intervalo
  clearInterval(intervalo);

}, 5000);