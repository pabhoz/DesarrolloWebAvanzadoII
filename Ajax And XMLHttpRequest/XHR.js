//Creando el objeto XMLHttpRequest
var xhr = new XMLHttpRequest();
//Especificamos el metodo depetición, la url y especificamos
//si la petición será asincronica o no.
xhr.open('GET',"leBasic.json",true);

xhr.onload = function(){
    console.log("Requesting");
};
//Enviamos la solicitud;
xhr.send(); // si el metodo fuera POST enviariamos las variables
            //como cadena dentro del metodo send().
console.log(xhr);
document.write(xhr["status"]);

$.ajax({
  type: "GET",
  url: "leBasic.json",
  data: {}
})
  .done(function( msg ) {
    document.write(msg);
      console.log(msg);
});
