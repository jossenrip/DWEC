let div = document.getElementById("div")
let salida = ""

let set = new Set(["Jose", "Ines"])

let nombre = prompt("Nombre")
if(set.has(nombre)){
    salida = "Error valor repetido <br>"
}else{
    set.add(nombre)
}

for(let valor of set){
    salida += valor + " "
}

set.delete(nombre)
salida += "<br>"

for(let valor of set){
    salida += valor + " "
}

div.innerHTML = salida