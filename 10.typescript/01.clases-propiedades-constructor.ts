//CLASE: Una clase es un modelo que se utiliza para crear objetos que comparten un mismo comportamiento, estado e identidad

class Propiedades{

	//PROPIEDADES: Son las características que puede tener un Objeto

	public texto:string;
	public numero:number;
	public boleana:boolean;
	public arreglo:Array<any>;
	public cualquiera:any;

	//CONSTRUCTOR: Se utiliza para asignar valor a las propiedades globales.

	constructor(){

		this.texto = "Palabra";
		console.log("texto", this.texto);
		this.numero = 27;
		console.log("numero", this.numero);
		this.boleana = true;
		console.log("boleana", this.boleana);
		this.arreglo = ["Joan", "Manuel", false, "Alexander", 100];
		console.log("arreglo", this.arreglo);
		this.cualquiera = {
				"propiedad1":"valor1", 
				"propiedad2":"valor2",
				"propiedad3" : "valor3"
				};
		console.log("cualquiera", this.cualquiera);

	}

}

var objeto = new Propiedades();