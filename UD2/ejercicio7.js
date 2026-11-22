const fechaTexto = prompt("¿Qué día naciste? YYYY/MM/DD");

if (fechaTexto !== null) {
    const nacimiento = new Date(fechaTexto);
    const hoy = new Date();
    const milisegundosPorDia = 1000 * 60 * 60 * 24;

    const dias = Math.floor((hoy - nacimiento) / milisegundosPorDia);

    alert("Han transcurrido " + dias + " días, aproximadamente, desde que naciste");
}
