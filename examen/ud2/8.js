function calcEdad() {
    let valor = document.getElementById("fecha").value;

    //Si no hay fecha
    if (valor === "") {
        alert("Introduce una fecha");
        return;
    }

    let nacimiento = new Date(valor);
    let hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    //Si este año aun no se han cumplido años
    let aunNoCumple =
        hoy.getMonth() < nacimiento.getMonth() ||
        (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate());

    if (aunNoCumple) {
        edad--;
    }

    alert("Tienes " + edad + " años");
}

document.getElementById("boton").addEventListener("click", calcEdad);