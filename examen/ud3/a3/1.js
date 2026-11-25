let div = document.getElementById("div")
let salida = ""

let numeros = []
for(let i = 0; i < 6; i++){
    //Math.floor -> castea sin decimales
    numeros.push(Math.floor(Math.random() * 51)) // Num aleatorio hasta el 50
}

for(let i = 0; i < numeros.length; i++){
    salida += numeros[i] + " "
}
salida += "<br>"
let n1
let n2
let resto = []
for(let i = 0; i < numeros.length; i++){
    if(i == 0){
        n1 = numeros[i]
        salida += n1 + "<br>"
    }else if(i == 1){
        n2 = numeros[i]
        salida += n2 + "<br>"
    }else{
        resto.push(numeros[i])
        salida += numeros[i]
    }
}

div.innerHTML = salida

