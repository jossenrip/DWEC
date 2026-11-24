const colores = [
    "azul", "rojo", "verde"
]
let p = document.getElementById("colores")
let salida = ""

for(i = 0; i < colores.length; i++){
    salida += colores[i] + " "
}
colores[1] = "amarillo"

salida += "<br>"
for(i = 0; i < colores.length; i++){
    salida += colores[i] + " "
}
p.innerHTML += salida