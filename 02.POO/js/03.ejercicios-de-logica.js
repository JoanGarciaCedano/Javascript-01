/*========================
=          CASO1         =
========================*/
/*
De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detrás de B,
 y D ha llegado en medio de A y C. ¿Podría usted calcular el orden de llegada?
*/

var a = {
	A : 0,
	B : 0,
	C : 0,
	D : 0,
	resultado: function(){

		if(a.C > a.B && a.D > a.B && a.D > a.C && a.D < a.A){

			return true;

		}

		return false;

	},
	intervalo: setInterval(function(){
		
		a.A = Math.ceil(Math.random() * 4);
		a.B = Math.ceil(Math.random() * 4);
		a.C = Math.ceil(Math.random() * 4);
		a.D = Math.ceil(Math.random() * 4);

		if(a.resultado()){
			clearInterval(a.intervalo);
			console.log("atleta A", a.A);
			console.log("atleta B", a.B);
			console.log("atleta C", a.C);
			console.log("atleta D", a.D);
		}

	}, 10)
}


/*==============================
=            CASO 2            =
==============================*/
/*
El caballo de Mac es más oscuro que el de Smith, pero más rápido y más viejo
que el de Jack, que es aún más lento que el de WIlly, que es más joven que el de Mac,
que es más viejo que el de Smith, que es más claro que el de Willy,
aun que el de Jack es más lento y más oscuro que el de Smith. ¿Cuál es el más viejo,
cuál es el más lento y cúál es el más claro?

Mac     edad: viejo (2)  | velocidad: rapido (2) | tono: oscuro (2)
Smith   edad: joven (1)  | velocidad: rapido (2) | tono: claro (1)
Jack    edad: joven (1)  | velocidad: lento (1) | tono: oscuro (2)
Willy   edad: joven (1)  | velocidad: rapido (2) | tono: oscuro (2)
*/

var b = {
	Mac : {
		edad : 0,
		velocidad : 0,
		tono : 0
	},
	Smith : {
		edad : 0,
		velocidad : 0,
		tono : 0
	},
	Jack : {
		edad : 0,
		velocidad : 0,
		tono : 0
	},
	Willy : {
		edad : 0,
		velocidad : 0,
		tono : 0
	},
	resultado : function(){

		if(b.Mac.tono > b.Smith.tono && 
	 	   b.Mac.velocidad > b.Jack.velocidad && 
	 	   b.Mac.edad > b.Jack.edad && 
	 	   b.Willy.velocidad > b.Jack.velocidad &&
	 	   b.Mac.edad > b.Willy.edad &&
	 	   b.Mac.edad > b.Smith.edad &&
	 	   b.Willy.tono > b.Smith.tono &&
	 	   b.Smith.velocidad > b.Jack.velocidad &&
	 	   b.Jack.tono > b.Smith.tono){

			return true;

		}

		return false;  

	},
	intervalo : setInterval(function(){

		b.Mac.tono = Math.ceil(Math.random() * 2);
		b.Mac.velocidad = Math.ceil(Math.random() * 2);
		b.Mac.edad = Math.ceil(Math.random() * 2);

		b.Smith.tono = Math.ceil(Math.random() * 2);
		b.Smith.velocidad = Math.ceil(Math.random() * 2);
		b.Smith.edad = Math.ceil(Math.random() * 2);

		b.Jack.tono = Math.ceil(Math.random() * 2);
		b.Jack.velocidad = Math.ceil(Math.random() * 2);
		b.Jack.edad = Math.ceil(Math.random() * 2);

		b.Willy.tono = Math.ceil(Math.random() * 2);
		b.Willy.velocidad = Math.ceil(Math.random() * 2);
		b.Willy.edad = Math.ceil(Math.random() * 2);

        if(b.resultado()){

        	clearInterval(b.intervalo);
        	console.log("Caballo de Mac", b.Mac);
        	console.log("Caballo de Smith", b.Smith);
        	console.log("Caballo de Jack", b.Jack);
        	console.log("Caballo de Willy", b.Willy);

        }

	}, 1)
}


/*==============================
=            CASO 3            =
==============================*/
/*
Tenemos cuatro perros: un galgo, un dogo, un alano y un podenco.Éste último come
más que el galgo; el alano come más que el galgo y menos que el dogo, pero éste come más que el podenco.
¿Cuál de los cuatro perros come menos?

galgo     come: (1)
dogo   come:  (4)  
alano    come: (3)
podenco   come: (2) 
*/

var c = {
      galgo : {
      	come : 0
      },
      dogo : {
      	come : 0
      },
      alano : {
      	come : 0
      },
      podenco : {
      	come : 0
      },
      resultado : function(){

      	if(c.podenco.come > c.galgo.come &&
      	   c.alano.come > c.galgo.come && c.alano.come < c.dogo.come &&
      	   c.alano.come > c.podenco.come){

      		return true;

      	}

      	return false;

      },
      intervalo : setInterval(function(){

      	c.galgo.come = Math.ceil(Math.random() * 4);
      	c.dogo.come = Math.ceil(Math.random() * 4);
      	c.alano.come = Math.ceil(Math.random() * 4);
      	c.podenco.come = Math.ceil(Math.random() * 4);

      	if(c.resultado()){
      		clearInterval(c.intervalo);
      		console.log("El galgo come: "+c.galgo.come);
      		console.log("El dogo come: "+c.dogo.come);
      		console.log("El alano come: "+c.alano.come);
      		console.log("El podenco come: "+c.podenco.come);

      	}

      }, 1)

}

/*==============================
=            CASO 4            =
==============================*/
/*
Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos, utilizar diferentes medios de transporte;
sabemos que Alejandro no utiliza el coche ya que éste acompaña a Benito que no va en Avión. Andrés viaja en avión.
Si Carlos no va acompañado de Darío ni hace uso del avión, podría Ud. decirnos en qué medio de transporte llega
a su destino Tomás.

Alejandro   pareja: (1) | transporte:  otro(3)
Benito      pareja: (1) | transporte:  otro(3)  
Andrés      pareja: (2)  | transporte:  avion(2)
Tomás       pareja: (3)| transporte:  carro(1)
Carlos      pareja: (3)| transporte:  carro(1)
Darío       pareja: (2) | transporte:  avion(2)
*/

var d = {
 avion:1,
 coche:2,
 otro:3,
 
	 alejandro:{transporte:0},
	 benito:{transporte:0},
	 andres:{transporte:0},
	 carlos:{transporte:0},
	 dario:{transporte:0},
	 tomas:{transporte:0},
	 
	 resultado: function(){
	 if(d.alejandro.transporte != d.coche && 
	    d.alejandro.transporte == d.benito.transporte && 
	    d.benito.transporte != d.avion &&
	    d.andres.transporte == d.avion &&
	    d.carlos.transporte != d.dario.transporte &&
	    d.carlos.transporte != d.avion &&
	    d.carlos.transporte == d.coche &&
	    d.andres.transporte == d.dario.transporte &&  
	    d.carlos.transporte == d.tomas.transporte
	    ){
	 	return true;
	 }
		 return false;
	 },
	 
	 intervalo: setInterval(function(){
	 
	 d.alejandro.transporte = Math.ceil(Math.random()*3);
	 d.benito.transporte = Math.ceil(Math.random()*3);
	 d.andres.transporte = Math.ceil(Math.random()*3);
	 d.carlos.transporte = Math.ceil(Math.random()*3);
	 d.dario.transporte = Math.ceil(Math.random()*3);
	 d.tomas.transporte = Math.ceil(Math.random()*3);
	 
	 
		 if(d.resultado()){
		 clearInterval(d.intervalo);
		 
		 if(d.tomas.transporte == 1){
			 console.log("Tom+as viaja en avión");
		 
		 }else if(d.tomas.transporte == 2){
		 	console.log("Tom+as viaja en coche");
		 }else{
			 console.log("Tom+as viaja en otro transporte");
		 };
		 }
	 },1)
}

/*==============================
=            CASO 5            =
==============================*/
/*
Si Ángela habla más bajo que Rosa y Celia habla más alto que Rosa, ¿habla Ángela más alto o más bajo que Celia?

Ángela  habla: (1) 
Rosa      habla: (2) 
Celia     habla: (3)
*/

var e = {

	Angela : {
		habla : 0
	},
	Rosa : {
		habla : 0
	},
	Celia :{
		habla : 0
	},
	resultado : function(){

		if(e.Angela.habla < e.Rosa.habla &&
		   e.Celia.habla > e.Rosa.habla &&
		   e.Angela.habla < e.Celia.habla){

			return true;

		}

		return false;

	},
	intervalo: setInterval(function(){

		e.Angela.habla = Math.ceil(Math.random() * 3);
		e.Celia.habla = Math.ceil(Math.random() * 3);
		e.Rosa.habla = Math.ceil(Math.random() * 3);

		if(e.resultado()){
			clearInterval(e.intervalo);
			console.log("Angela habla: "+e.Angela.habla);
			console.log("Celia habla: "+e.Celia.habla);
			console.log("Rosa habla: "+e.Rosa.habla);


		}

	},1)

}