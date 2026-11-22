function convertir() {
    const cadena = document.getElementById("cadena").value;

    const letras = cadena.split("");
    let inversa = "";
    for (let i = letras.length - 1; i >= 0; i--) {
        inversa += letras[i];
    }

    document.getElementById("inversa").value = inversa;
    document.getElementById("mayusculas").value = cadena.toUpperCase();
    document.getElementById("repetida").value = cadena.repeat(3);
    document.getElementById("invertidaMayusculas").value = inversa.toUpperCase();
}

document.getElementById("convertir").addEventListener("click", convertir);