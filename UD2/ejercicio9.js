function comprobarFecha() {
    const fecha = document.getElementById("fecha").value;
    const expresion = /^[0-9]{1,2}\/[0-9]{1,2}\/([0-9]{2}|[0-9]{4})$/;

    if (expresion.test(fecha)) {
        alert("Gràcies per introduir la data");
    } else {
        alert("El format de data no és correcte");
    }
}

document.getElementById("comprobar").addEventListener("click", comprobarFecha);
