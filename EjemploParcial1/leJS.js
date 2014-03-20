function init(){
var json = '{\
                "contenido": {\
                                "noticia": [\
                                                {\
                                                 "titulo":"El titulo",\
                                                 "fecha":"01/01/01",\
                                                 "autor":"Jhon Doe",\
                                                 "cuerpo":"lorem ipsum dolor amet",\
                                                 "tipoCaja":"grande",\
                                                 "imgSrc":"imgs/2.jpg",\
                                                 "imgSize":"fullImg"\
                                                },\
                                                {\
                                                 "titulo":"El otro titulo",\
                                                 "fecha":"02/02/02",\
                                                 "autor":"Jhon Doe Jr",\
                                                 "cuerpo":"Foo content lipsum lagalaga",\
                                                 "tipoCaja":"mediana"\
                                                },\
                                                {\
                                                 "titulo":"El Mejor",\
                                                 "fecha":"03/03/03",\
                                                 "autor":"Jhon Doe Mr",\
                                                 "cuerpo":"Foo content lipsum lagalaga",\
                                                 "tipoCaja":"mediana"\
                                                },\
                                                {\
                                                 "titulo":"Pequeñita",\
                                                 "fecha":"04/04/04",\
                                                 "autor":"Jhon Doe Jr",\
                                                 "cuerpo":"Foo content lipsum lagalaga",\
                                                 "tipoCaja":"pequena",\
                                                 "imgSrc":"imgs/1.jpg"\
                                                },\
                                                {\
                                                 "titulo":"Pequeñita",\
                                                 "fecha":"04/04/04",\
                                                 "autor":"Jhon Doe Jr",\
                                                 "cuerpo":"Foo content lipsum lagalaga",\
                                                 "tipoCaja":"pequena",\
                                                 "imgSrc":"imgs/1.jpg"\
                                                },\
                                                {\
                                                 "titulo":"Pequeñita",\
                                                 "fecha":"04/04/04",\
                                                 "autor":"Jhon Doe Jr",\
                                                 "cuerpo":"Foo content lipsum lagalaga",\
                                                 "tipoCaja":"pequena",\
                                                 "imgSrc":"imgs/1.jpg"\
                                                },\
                                                {\
                                                 "titulo":"Pequeñita",\
                                                 "fecha":"04/04/04",\
                                                 "autor":"Jhon Doe Jr",\
                                                 "cuerpo":"Foo content lipsum lagalaga",\
                                                 "tipoCaja":"pequena",\
                                                 "imgSrc":"imgs/1.jpg"\
                                                }\
                                            ]\
                            }\
            }';
    
    var parsedJSON = JSON.parse(json);//Convierto la string en un objeto JSON
    console.log(parsedJSON); //Imprimo el objeto por consola
    
    var noticias = parsedJSON.contenido.noticia;
    crearNoticias(noticias);
    function crearNoticias(noticias){
        for(var i=0; i<noticias.length; i++){
            crearCajaNoticia(noticias[i],document.getElementById('noticias'));
        }
    }
    function crearCajaNoticia(json,target){
        var divNoticia = document.createElement('div');
        var divCabecera = document.createElement('div');
        var divTitulo = document.createElement('div');
        var divFecha = document.createElement('div');
        var divAutor = document.createElement('div');
        var divCuerpo = document.createElement('div');

        divTitulo.innerHTML = json.titulo;
        divFecha.innerHTML = json.fecha;
        divAutor.innerHTML = json.autor;
        divCabecera.appendChild(divTitulo); divTitulo.className = "titulo";
        divCabecera.appendChild(divFecha); divFecha.className = "fecha";
        divCabecera.appendChild(divAutor); divAutor.className = "autor";
        
        if( json.imgSrc ){
            var divImg = document.createElement('div');
            var leImg = document.createElement('img');
            leImg.src = json.imgSrc;
            divImg.appendChild(leImg);
            if(json.imgSize){
                divImg.className += json.imgSize;
            }else{
                divImg.className = "newsImg";
            }
            divCabecera.appendChild(divImg);
        }
        
        divCuerpo.innerHTML = json.cuerpo; divCuerpo.className = "cuerpo";
        divNoticia.appendChild(divCabecera); divCabecera.className = "cabecera";
        divNoticia.appendChild(divCuerpo); divNoticia.className = "noticia "+json.tipoCaja;
        target.appendChild(divNoticia);
    }
}