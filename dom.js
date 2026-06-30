

// 3) Crear la variable que llame a la función.
mensaje = function() {
    // alert("Hice click en el boton de Calcular");

    var nom = document.getElementById("nombre");
    alert(nom);
    alert(nom.value);

    var marca = document.querySelector('input[name="marca": checked)
    alert(marca);

    if (marca.checked)
    

    alert();

}

// 2.1) Asignar una variable que llame al ID del HTML
var boton = document.getElementById("btnCalcular");
// 2.2) Agregar un evento que sea el click y asignar la acción
boton.addEventListener("click", mensaje);