let div = document.getElementById("div")
let salida = ""

let mapa = new Map([
    ["Jose", 21],
    ["Ines", 20]
])

let nombre = prompt("Nombre")
let edad = prompt("Edad")

mapa.set(nombre, edad)
for(let [clave, valor] of mapa){
    salida += clave + " - " + valor + "<br>"
}

salida += "<hr>"

edad = prompt("Nueva edad")
mapa.set(nombre, edad)
for(let [clave, valor] of mapa){
    salida += clave + " - " + valor + "<br>"
}

div.innerHTML = salida