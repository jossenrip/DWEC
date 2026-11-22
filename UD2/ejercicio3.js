function repetir() {
    const palabra = document.getElementById("palabra").value.toUpperCase();
    const filaTabla = document.getElementById("filaTabla");

    filaTabla.innerHTML = "";

    for (let i = 0; i < palabra.length; i++) {
        filaTabla.appendChild(document.createElement("td"));
        filaTabla.querySelectorAll("td")[i].innerText = palabra[i];
    }
}

document.getElementById("repetir").addEventListener("click", repetir);
