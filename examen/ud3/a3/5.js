let div = document.getElementById("div")
let salida = ""

let array = ["Mortadela", "MortAdeLa", "Chorizo", "Salchichon"]

function contarOcurrencias(palabras){
    let mapa = new Map()
    for(let palabra of palabras){
        if(mapa.has(palabra.toLowerCase())){
            mapa.set(palabra.toLowerCase(), mapa.get(palabra.toLowerCase()) + 1)
        }else{
            mapa.set(palabra.toLowerCase(), 1) //si no existe la añade y tiene 1
        }
    }
    return mapa
}

for(let [clave, valor] of contarOcurrencias(array)){
    salida += clave + " => " + valor + "<br>"
}
div.innerHTML = salida