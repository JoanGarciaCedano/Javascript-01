/*===================================================================
=            EL OBJETO DE LAS PROPIEDADES DEL FORMULARIO            =
===================================================================*/

var pf = {

	entradas : document.querySelectorAll("input.validar"),
	valor : null

}

/*=====  End of EL OBJETO DE LAS PROPIEDADES DEL FORMULARIO  ======*/


/*===============================================================
=            EL OBJETO DE LOS METODOS DEL FORMULARIO            =
===============================================================*/

var mf = {

	iniciarFormulario: function(){

		for(var i = 0; i < pf.entradas.length; i++){

			pf.entradas[i].addEventListener("focus", mf.enFoco);

		}		

	},
	enFoco : function(input){

		pf.valor = input.target.value;
		
		if(pf.valor == ""){

			document.querySelector("#"+input.target.id).style.background = "rgba(255,255,0,.5)";
			document.querySelector("[for="+input.target.id+"] .obligatorio").style.opacity = 1;

		}

	}

}

/*=====  End of EL OBJETO DE LOS METODOS DEL FORMULARIO  ======*/

mf.iniciarFormulario();