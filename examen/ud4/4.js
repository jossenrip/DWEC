let div = document.getElementById("div")

let numeros = [1, 2, 3, 4, 5]

function sumar(array){
    // Devuelve la suma de de todos los nuemeros
    return array.reduce((acumulador, n) => acumulador + n, 0)
}

div.innerHTML = "Suma: " + sumar(numeros)