let numeros = [4, 21, 33, 12, 9, 54]

let salida = ""
let div = document.getElementById("div")

let pares = []

for(let i = 0; i < numeros.length; i++){
    if((numeros[i] % 2) == 0){
        pares.push(numeros[i])
        salida += numeros[i] + " "
    }
}

div.innerHTML = salida