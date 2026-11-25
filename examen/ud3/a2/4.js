let div = document.getElementById("div")
let nombres = [
    "Ana", "Pedro", "Juan", "Sofía", "Carlos"
]

let salida = ""

nombres.sort()

for(let i = 0; i < nombres.length; i++){
    salida += nombres[i] + " "
}

nombres.reverse()

for(let i = 0; i < nombres.length; i++){
    salida += nombres[i] + " "
}

div.innerHTML = salida