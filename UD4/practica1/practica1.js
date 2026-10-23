const palabras = [];

let palabra = prompt("Introduce una palabra (vacío o cancelar para terminar):");

while (palabra !== null && palabra.trim() !== "") {
    palabras.push(palabra.trim());
    palabra = prompt("Introduce otra palabra:");
}

const resultado = [...new Set(palabras)].sort((a, b) => b.localeCompare(a, "es"));

const lista = document.getElementById("resultado");

resultado.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
});
