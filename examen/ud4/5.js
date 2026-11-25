let div = document.getElementById("div")
let salida = ""

let numeros = [1, 2, 3, 4, 5]

function filtrar(array){
    return array.filter(n => n > 3)
}
let nuevo = filtrar(numeros)
for(let i = 0; i < nuevo.length; i++){
    salida += nuevo[i] + " "
}
div.innerHTML = salida