const opciones = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

const fecha = new Date().toLocaleDateString("es-ES", opciones);

alert("Hoy es " + fecha);
