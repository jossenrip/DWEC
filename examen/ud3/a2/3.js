let colores = [
    "azul", "amarillo", "rojo",
    "verde", "naranja", "violeta"
]

let div = document.getElementById("div")

let colores2 = colores.slice(1, 5)

//colores3 guarda lo eliminado de colores (rojo y verde)
let colores3 = colores.splice(2, 2, "blanco", "negro")

//sustituye el indice 2 (rojo) y elimina 2 elementos (rojo y verde)
//y en su lugar mete blanco y negro
colores.splice(2, 2, "blanco", "negro")

let salida = ""

for(let i = 0; i < colores2.length; i++){
    salida += colores2[i] + " "
}

salida += "<br>"

for(let i = 0; i < colores.length; i++){
    salida += colores[i] + " "
}

salida += "<br>"

for(let i = 0; i < colores3.length; i++){
    salida += colores3[i] + " "
}

div.innerHTML = salida