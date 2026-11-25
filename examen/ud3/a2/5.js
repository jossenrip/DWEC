let edades = [25, 30, 18, 40, 25, 30]

let primer = edades.indexOf(30)
let ultimo = edades.lastIndexOf(25)

let salida = primer + " " + ultimo
let div = document.getElementById("div")

div.innerHTML = salida