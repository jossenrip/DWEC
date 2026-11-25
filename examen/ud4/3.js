let div = document.getElementById("div")
let salida = ""

const numeros = [2, 3, 4, 5]

function por2(array){
    return array.map(n => n * 2)
}

let nuevo = por2(numeros)
for(let i = 0; i < nuevo.length; i++){
    salida += nuevo[i] + " "
}

div.innerHTML = salida