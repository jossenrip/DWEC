let letras = ['a', 'b', 'c', 'd']

let salida = ""
let div = document.getElementById("div")

let tieneC = letras.includes('c')
let tieneZ = letras.includes('z')

salida += tieneC + " " + tieneZ
div.innerHTML = salida