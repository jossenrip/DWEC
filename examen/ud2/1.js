let formulario = document.getElementById("form")

//Al enviar el formulario llama a la funcion, 
// donde event contiene la info sobre el evento q acaba de producirse
formulario.onsubmit = function(event){
    //evita el comportamiento predeterminado del formulario
    //(eivta que se recarge la pag al enviar el formulario)
    event.preventDefault();
    let cadena = document.getElementById("texto").value
    let cuerpo = document.getElementById("resultado")

    function inversa(texto){
        let invertido = ""
        for(let i = (texto.length - 1); i >= 0 ; i--){
            invertido += texto[i]
        }
        return invertido
    }

    function repetida(texto){
        let rep = ""
        for(let i = 0; i < 3; i++){
            rep += texto
        }
        return rep
    }

    cuerpo.innerHTML = "<p>INVERSA: </p>"
    cuerpo.innerHTML += "<input type='text' readonly value='" + inversa(cadena) + "'><br>"

    cuerpo.innerHTML += "<p>MAYUS: </p>"
    cuerpo.innerHTML += "<input type='text' readonly value='" + cadena.toUpperCase() + "'><br>"

    cuerpo.innerHTML += "<p>REPETIR: </p>"
    cuerpo.innerHTML += "<input type='text' readonly value='" + repetida(cadena) + "'><br>"

    cuerpo.innerHTML += "<p>INVERSA Y MAYUS: </p>"
    cuerpo.innerHTML += "<input type='text' readonly value='" + inversa(cadena).toUpperCase() + "'><br>"
}
