let texto = window.prompt("Introduce un texto:");

let contador = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a" || texto[i] == "A") {
        contador++;
    }
}

window.alert("Hay " + contador + " letras a o A");