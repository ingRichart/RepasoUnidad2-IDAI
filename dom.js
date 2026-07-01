

// 3) Crear la variable que llame a la función.
mensaje = function() {
    // alert("Hice click en el boton de Calcular");

    //El elemento del text input
    var nom = document.getElementById("nombre");
    alert(nom);
    alert(nom.value);

    //El elemento del text radio
    var marca = document.querySelector('input[name="marca"]:checked');
    alert(marca);
    alert(marca.value);

    //El elemento del select con sus valores
    var dias = document.getElementById("dias");
    alert(dias);
    alert(dias.value);

    //El elemento del checkbox
    var contrato = document.getElementById("contrato");
    var traslado = document.getElementById("traslado");
    var kilometraje = document.getElementById("kilometraje");
    var electrico = document.getElementById("electrico");
    var esterilizacion = document.getElementById("esterilizacion");
    var wifi = document.getElementById("wifi");

    alert(contrato);
    alert(contrato.checked);
    alert(traslado);
    alert(traslado.checked);
    alert(kilometraje);
    alert(kilometraje.checked);
    alert(electrico);
    alert(electrico.checked);
    alert(esterilizacion);
    alert(esterilizacion.checked);
    alert(wifi);
    alert(wifi.checked);


    // var marca = document.querySelector('input[name="marca": checked)
    // alert(marca);

    // if (marca.checked)

}

// 2.1) Asignar una variable que llame al ID del HTML
var boton = document.getElementById("btnCalcular");
// 2.2) Agregar un evento que sea el click y asignar la acción
boton.addEventListener("click", mensaje);