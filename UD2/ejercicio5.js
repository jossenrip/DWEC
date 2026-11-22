function calcularMayor() {
    const campos = document.querySelectorAll(".numero");
    let mayor = Number(campos[0].value);

    for (let i = 1; i < campos.length; i++) {
        const valor = Number(campos[i].value);
        if (valor > mayor) {
            mayor = valor;
        }
    }

    alert("El mayor número es " + mayor);
}

document.getElementById("mayor").addEventListener("click", calcularMayor);
