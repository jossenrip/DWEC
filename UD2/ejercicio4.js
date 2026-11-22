function convertir() {
    const numero = parseInt(document.getElementById("numero").value, 10);

    document.getElementById("binario").innerText = numero.toString(2);
    document.getElementById("octal").innerText = numero.toString(8);
    document.getElementById("hexadecimal").innerText = numero.toString(16);
}

document.getElementById("convertir").addEventListener("click", convertir);
