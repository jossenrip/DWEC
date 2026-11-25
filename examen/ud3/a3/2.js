let div = document.getElementById("div")
let salida = ""

let numeros = []
for(let i = 0; i < 6; i++){
    //Math.floor -> castea sin decimales
    numeros.push(Math.floor(Math.random() * 6)) // Num aleatorio hasta el 50
    salida += numeros[i] + " "
}

salida += "<br>"

let set = new Set()
for(let i = 0; i < numeros.length; i++){
    set.add(numeros[i])
}

for(let valor of set){
    salida += valor + " "
}

div.innerHTML = salida

