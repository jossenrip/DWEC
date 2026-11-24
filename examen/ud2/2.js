let palabra = prompt("Palabra").replaceAll(" ", "")
let caja = document.getElementsByTagName("div")[0]

let tabla = "<table border=2>"
tabla += "<tr>"
for(let i = 0; i < palabra.length; i++){
    tabla += "<td>" + palabra[i] + "</td>"
}
tabla += "</tr>"
tabla += "</table>"

caja.innerHTML = tabla

