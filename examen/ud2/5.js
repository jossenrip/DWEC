function mayor(){
    let inputs = document.querySelectorAll("input[type='number']")
    let numeros = []
    for(let i = 0; i < inputs.length; i++){
        numeros[i] = Number(inputs[i].value)
    }

    numeros.sort((a, b) => b - a)
    alert("El mayor: " + numeros[0])
}

document.getElementById("boton").addEventListener("click", mayor)