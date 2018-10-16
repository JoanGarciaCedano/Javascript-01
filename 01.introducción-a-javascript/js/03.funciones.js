//VARIABLES GLOBALES
var globales = 10;
console.log("globales", globales);

/*================================================
=            FUNCIONES SIN PARÁMETROS            =
================================================*/

// 1.- DECLARAMOS LA FUNCION
function saludo(){

	//TAREA DE LA FUNCIÓN
	console.log("Hola");

}

// 2- EJECUTAMOS LA FUNCIÓN
saludo();

/*================================================
=            FUNCIONES CON PARÁMETROS            =
================================================*/

// 1.- DECLARAMOS LA FUNCION
function operacion(numero1, numero2){

	//TAREA DE LA FUNCIÓN
	var resultado = numero1 + numero2;
	globales = resultado;
	console.log("globales_operacion", globales);

}

// 2- EJECUTAMOS LA FUNCIÓN
operacion(5, 10);

/*================================================
=   FUNCIONES CON RETORNO SIN PARAMETRO          =
================================================*/


// 1.- DECLARAMOS LA FUNCION
function retorno1(){

	//TAREA DE LA FUNCIÓN
	var numero = 5;
	return numero;

}

// 2- EJECUTAMOS LA FUNCIÓN
console.log("retorno1", retorno1());

/*================================================
=   FUNCIONES CON RETORNO CON PARAMETRO          =
================================================*/


// 1.- DECLARAMOS LA FUNCION
function retorno2(numero){

	//TAREA DE LA FUNCIÓN
	var numero;
	return numero;

}

// 2- EJECUTAMOS LA FUNCIÓN
console.log("retorno2", retorno2(255));