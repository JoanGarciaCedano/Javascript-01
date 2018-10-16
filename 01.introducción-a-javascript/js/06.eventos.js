var recuadro = document.querySelector("#recuadro");

/*============================================
=            EVENTOS DESDE EL DOM            =
============================================*/

function cambiarColor(){

	recuadro.style.background = "orange";

}

/*================================================
=            EVENTOSD ESDE JAVASCRIPT            =
================================================*/

var boton = document.querySelector("#boton");

boton.addEventListener("click", moverCaja);

function moverCaja(){

	recuadro.style.width = "500px";
	recuadro.style.transition = "1s ease";

}