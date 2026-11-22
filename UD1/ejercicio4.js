let color = window.prompt("Elige un color: R = rojo, V = verde, A = azul");

if (color == "R") {
    document.body.style.backgroundColor = "red";
} else if (color == "V") {
    document.body.style.backgroundColor = "green";
} else if (color == "A") {
    document.body.style.backgroundColor = "blue";
} else {
    window.alert("Color no válido");
}