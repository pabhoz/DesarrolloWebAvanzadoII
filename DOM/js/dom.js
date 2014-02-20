/*document.write("Hola Mundoooo");
var divs = document.getElementsByTagName('div');
console.log(divs);
cuerpo = document.getElementById("foo");
console.log(cuerpo);

var divsUnicas = Array();
for (var i = 0; i < divs.length; i++) {
	if(divs[i].id != ""){
		divsUnicas.push(divs[i]);
	};
};
console.log(divsUnicas);*/
/*var miBoton = document.createElement('button');
miBoton.name ="Foo";
miBoton.innerHTML = "Foo";
miBoton.onclick = function(){alert('Auuuch')};

var laDiv = document.getElementById("foo");
laDiv.appendChild(miBoton);*/

/*document.getElementById("foo").appendChild(miBoton);*/

var elNombre = document.createElement('input');
elNombre.id = "Nombre";
elNombre.placeholder = "Escriba su nombre";
document.body.appendChild(elNombre);
console.log (elNombre);

var botonPau = document.createElement('button');
botonPau.name = "Saludar";
botonPau.innerHTML= "Saludar";
botonPau.onclick = function(){alert('Hola '+ elNombre.value)};
document.body.appendChild(botonPau);