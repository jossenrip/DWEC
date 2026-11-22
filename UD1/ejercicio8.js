let formulario = document.getElementById("formulario");

formulario.onsubmit = function(event) {

    event.preventDefault();

    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let numero3 = document.getElementById("numero3").value;

    if (numero1 == "" || numero2 == "" || numero3 == "") {
        window.alert("Debes rellenar los tres campos");
        return;
    }

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        window.alert("Los tres valores deben ser números");
        return;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);
    numero3 = Number(numero3);

    let mayor = numero1;

    if (numero2 > mayor) {
        mayor = numero2;
    }

    if (numero3 > mayor) {
        mayor = numero3;
    }

    window.alert("El número mayor es: " + mayor);
};