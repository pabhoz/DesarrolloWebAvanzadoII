var json = '{"ejemploParcial":{\
                                "header":{\
                                },\
                                "container":{\
                                                "cuerpo":{\
                                                    "elemento": [\
                                                        {"boxClass":"full","title":"full"},\
                                                        {"boxClass":"medio","title":"medio"},\
                                                        {"boxClass":"medio","title":"medio"},\
                                                        {"boxClass":"tercio","title":"tercio"},\
                                                        {"boxClass":"tercio","title":"tercio"},\
                                                        {"boxClass":"tercio","title":"tercio"},\
                                                        {"boxClass":"tercio","title":"tercio"},\
                                                        {"boxClass":"dosTercios","title":"dos tercios"}\
                                                    ]\
                                                },\
                                                "lateral":[\
                                                        {"boxClass":"full","title":"full"},\
{"boxClass":"full","title":"full"},\
{"boxClass":"full","title":"full"}\
                                                            ]\
                                },\
                                "footer":{\
                                }\
            }\
    }';
            
function init(){
      
    var pJSON = JSON.parse(json);
    console.log(pJSON);
    
    var cuerpo = pJSON.ejemploParcial.container.cuerpo.elemento;
    var lateral = pJSON.ejemploParcial.container.lateral;
    
    llenarElementos(cuerpo,"cuerpo","div");
    llenarElementos(lateral,"lateral","div");
    
}

function llenarElementos(elements,target,container){
    
    for(var i = 0; i<elements.length; i++ ){
        var t = document.getElementById(target);
        var e = document.createElement(container);
        e.innerHTML = elements[i].title;
        e.className = elements[i].boxClass;
        t.appendChild(e);
    }
    
}