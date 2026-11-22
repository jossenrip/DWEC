function comprobarFecha() {
    const valor = document.getElementById("fecha").value;

    if (valor === "") {
        alert("Selecciona una fecha");
        return;
    }

    const partes = valor.split("-");
    const anioNacimiento = Number(partes[0]);
    const mesNacimiento = Number(partes[1]);
    const diaNacimiento = Number(partes[2]);

    const hoy = new Date();
    const anioActual = hoy.getFullYear();
    const mesActual = hoy.getMonth() + 1;
    const diaActual = hoy.getDate();

    let edad = anioActual - anioNacimiento;

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    alert("Han transcurrido " + edad + " años, aproximadamente, desde que naciste");
}

document.getElementById("comprobar").addEventListener("click", comprobarFecha);
