// Importa las funciones por su nombre, entre llaves.
// La ruta lleva "./" y la extensión .js
import { suma, resta, multiplica, divide } from "4.js"

let div = document.getElementById("div")
let salida = ""

salida += "10 + 5 = " + suma(10, 5) + "<br>"
salida += "10 - 5 = " + resta(10, 5) + "<br>"
salida += "10 * 5 = " + multiplica(10, 5) + "<br>"
salida += "10 / 5 = " + divide(10, 5) + "<br>"

try{
    salida += "10 / 0 = " + divide(10, 0) + "<br>"
}catch(error){
    salida += "Error: " + error.message + "<br>"
}

div.innerHTML = salida
console.log(suma(10, 5), resta(10, 5), multiplica(10, 5), divide(10, 5))