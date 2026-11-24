let form = document.getElementById("formulario")
form.onsubmit = function(event){
    event.preventDefault()
    let numero = Number (document.getElementById("numero").value)
    let caja = document.getElementsByTagName("div")[0]
    let condiciones = ["BINARIO", "OCTAL", "HEXADECIMAL"]
    let paso = [2, 8, 16]
    let tabla = "<table border=2>"
    for(let i = 0; i < 3; i++){
        tabla += "<tr>"
        tabla += "<td>" + condiciones[i] + "</td>"
        tabla += "<td>" + numero.toString(paso[i]) + "</td>"
        tabla += "</tr>"
    }
    tabla += "</table>"

    caja.innerHTML = tabla
}



