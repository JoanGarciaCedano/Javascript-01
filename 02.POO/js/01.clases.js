/*==============================
=            CLASES            =
==============================*/
// LAS CLASES SON FUNCIONES CONSTRUCTORAS Y SIEMPRE LAS VAMOS A INICIAR CON MAYUSCULAS

/*=========================================
=            CLASES PRIMITIVAS            =
=========================================*/

//CLASE STRING

var string = new String("Joan García"); 
console.log("string", string);


//CLASE NUMBER

var number = new Number(12);
console.log("number", number);

//CLASE BOOLEAN

var boleana = new Boolean(true);
console.log("boleana", boleana);

/*=========================================
=            CLASES COMPUESTAS            =
=========================================*/

//CLASE ARRAY
var array = new Array("rojo", "amarillo", "verde");
console.log("array", array);

//CLASE OBJECT
var objeto = new Object({
	nombre: "pedro",
	edad: 27,
	sexo: "hombre"
});
console.log("objeto", objeto);


/*=========================================================
=            CLASES CREADAS POR EL PROGRAMADOR            =
=========================================================*/
//Creamos el Prototipo

function Persona(){

	//Propiedades Públicas
	this.nombre;
	this.edad;

}

var yo = new Persona();
yo.nombre = "Joan";
yo.edad = "27";
console.log("yo", yo);

//CLASES CON PARAMETROS

function Animales(nombre, raza){

	this.nombre = nombre;
	this.raza = raza;

}

var mascota = new Animales("perro", "pitbull");
console.log("mascota", mascota);