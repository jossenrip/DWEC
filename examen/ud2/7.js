let fecha = new Date()

let cumple = prompt("Cumple YYYY/MM/DD")
if(cumple[4] != "/" &&
    cumple[7] != "/"
){
    alert("Fecha inválida")
}else{
    c = new Date(cumple)
    let ms = 1000 * 60 * 60 * 24
    alert(Math.floor((fecha - c) / ms) + " dias")
}