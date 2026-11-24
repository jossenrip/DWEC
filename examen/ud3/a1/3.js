let nombres = [
    "jose", "ines", "marta"
]

let edades = [
    21, 19, 15
]

let mayores = []

for(let i = 0; i < nombres.length; i++){
    if(edades[i] >= 18){
        mayores.push([nombres[i], edades[i]])
    }
}
let tabla = "<table border=1>"
//foreach de php, para persona de mayores
for(let personas of mayores){
    tabla += "<tr>"
    for(let i = 0; i < personas.length; i++){
        tabla += "<td>" + personas[i] + "</td>"
    }
    tabla += "</tr>"
}
tabla += "</table>"

document.getElementById("personas").innerHTML += tabla