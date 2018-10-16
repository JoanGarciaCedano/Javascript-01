/*=====================================
=            LAS VARIABLES            =
=====================================*/

//VARIABLES NUMERICAS
var numero = 10;
console.log("numero", numero);

// VARIABLES DE TEXTO
var texto = "este es un texto";
console.log("texto", texto);

// VARIABLES BANDERA O BOOLEANAS
var boleana = true;
console.log("boleana", boleana);

// VARIABLES DE ARREGLO
var colores = ["rojo", "amarillo", true, 10, texto];
console.log("colores", colores);

// VARIABLES TIPO OBJETO {objeto: propiedad y valor}
var jugo = {
	"ingrediente1": "fresa",
	"ingrediente2": "mandarina",
	"ingrediente3": "platano" 
};
console.log("jugo", jugo.ingrediente1);

// VARIABLES TIPO DOM (Document Object Model)
/*
El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar mediante javascript para cambiar dinámicamente los contenidos y aspectos de la página.
*/
var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";


var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);