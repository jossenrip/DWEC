let cadena = prompt("Cadena")

let cant = 0
for(let i = 0; i < cadena.length; i++){
    if(cadena[i] === "a"){
        cant++
    }
}
alert("La cadena tiene un total de " + cant + " letras a")