let numeros = []

let div = document.getElementById("div")
let salida = ""
for(let i = 0; i < 10; i++){
    numeros[i] = 5
}

for(let i = 0; i < numeros.length; i++){
    salida += numeros[i] + " "
}

div.innerHTML = salida