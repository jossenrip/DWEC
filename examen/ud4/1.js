let div = document.getElementById("div")

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumaIterativa(numeros){
    let suma = 0
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i]
    }
    return suma
}
function sumaRecursiva(numeros, i = 0){
    if(i === numeros.length){   // caso base: no quedan elementos
        return 0
    }
    return numeros[i] + sumaRecursiva(numeros, i + 1)
}

div.innerHTML = "Iterativa: " + sumaIterativa(array) + "<br>" +
                "Recursiva: " + sumaRecursiva(array)