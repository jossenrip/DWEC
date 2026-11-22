const palabra = "HOLA";
const fila = document.getElementById("fila");

for (let i = 0; i < palabra.length; i++) {
    const celda = document.createElement("td");
    celda.textContent = palabra[i];
    fila.appendChild(celda);
}
