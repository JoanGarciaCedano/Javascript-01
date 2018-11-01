var Automovil = /** @class */ (function () {
    function Automovil() {
    }
    //MÉTODO: Es el algoritmo asociado a un objeto que indica la capacidad de lo que éste puede hacer.
    //La única diferencia entre Método y función es que llamamos método a las funciones de una clase o
    //de un objeto en la (POO), mientras que llamamos funciones a los algoritmos de la programación estructurada.
    Automovil.prototype.mostrar = function () {
        return "Hola soy un " + this.marca + ", modelo " + this.modelo;
    };
    return Automovil;
}());
//OBJETO: Es una entidad provista de métodos o mensajes a los cuales responde propiedades con valores concretos.
var automovil = new Automovil();
automovil.marca = "Toyota";
automovil.modelo = "2015";
console.log(automovil.mostrar());
var automovil2 = new Automovil();
automovil2.marca = "Mazda";
automovil2.modelo = "2000";
console.log("automovil2", automovil2.mostrar());
