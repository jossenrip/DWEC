const pedirPalabras = () => {
    const palabras = [];
    let palabra = prompt("Introduce una palabra (vacío o cancelar para terminar):");

    while (palabra !== null && palabra.trim() !== "") {
        palabras.push(palabra.trim());
        palabra = prompt("Introduce otra palabra:");
    }

    return palabras;
};

const mostrarResultado = (elementos) => {
    const lista = document.getElementById("resultado");

    elementos.forEach((elemento) => {
        const li = document.createElement("li");
        li.textContent = elemento;
        lista.appendChild(li);
    });
};
