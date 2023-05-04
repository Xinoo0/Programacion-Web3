$(document).ready(function () {
    console.log("Estamos Conectados");

    //Accediendo al DOM
    //$('h1').html("INTRODUCCION A JQUERY DESDE JQ-NOMBRE ETIQUETA");
    //$('#titulo').html("INTRO A JQUERY QJ-ID");
    $('.display-4').html("INTRO A JQUERY CAMBIO CLASE");
    
    //MANIPULANDO EL DOM
    //Agregando elementos al DOM
    $('#parr1').addClass('text-danger');
    $('#parr2').removeClass('display-3');

    //Agregando Etiquetas
    $('.container').append('<p> Este es un parrafo agregado </p>');





});