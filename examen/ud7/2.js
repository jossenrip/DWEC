let div = document.getElementById("div")
let salida = ""

function divide(a, b){
    if(b === 0){
        throw new Error("No se puede dividir por cero")
    }
    return a / b
}

try{
    salida += "10 / 2 = " + divide(10, 2) + "<br>"
    salida += "10 / 0 = " + divide(10, 0) + "<br>"
}catch(error){
    console.log("Error: " + error.message)
    salida += "Error: " + error.message + "<br>"
}

div.innerHTML = salida