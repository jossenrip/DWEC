let letras = []

let div = document.getElementById("div")
let salida = ""

letras.unshift("A") //Añadir 1ero
letras.push("B") //Añadir al final
letras.push("C")

letras.push("D") 
letras.push("E")

letras.shift() //Borrar 1ero
letras.pop() //Borrar último

for(let i = 0; i < letras.length; i++){
    salida += letras[i] + " "
}

div.innerHTML = salida