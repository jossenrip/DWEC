const palabras = [
    "ana", "radar", "javascript", "reconocer", 
    "oro", "palindromo", "salas"
]
let div = document.getElementById("palindormo")
let reversas = []

for(let l of palabras){
    let p = ""
    for(let j = (l.length - 1); j > -1; j--){
        p += l[j]
    }
    reversas.push(p)
}

let palindormas = []
for(let i = 0; i < palabras.length; i++){
    if(palabras[i] === reversas[i]){
        palindormas.push(palabras[i])
    }
}
let salida = ""
for(let i = 0; i < palindormas.length; i++){
    salida += palindormas[i] + " "
}

div.innerHTML = salida