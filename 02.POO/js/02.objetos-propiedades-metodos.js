/*===============================
=            OBJETOS            =
===============================*/
//Es una colección de propiedades y métodos.

var object = {
		//Una propiedad es una asociación entre un nombre y un valor.
		nombre : "Joan",
		edad: 27,
		//El método es una función dentro de un objeto.
		descripcion: function(){
			console.log("Su nombre es "+object.nombre+" y tiene "+object.edad+" años");
		},
		saludar: function(saludo){
			console.log(saludo+" "+object.nombre);
		}
}

console.log("Nombre", object.nombre);
object.descripcion();
object.saludar("Hola hermoso");


/*==========================================
=            OBJETOS PRIMITIVOS            =
==========================================*/

//El objeto Date se utiliza para trabajar con fechas y horas.

var fecha = new Date();
console.log("fecha", fecha);
var y = fecha.getFullYear();
console.log("y", y);
