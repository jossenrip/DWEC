let contenedor = document.getElementById("contenedor")
let botonEliminarPrimero = document.getElementById("eliminarPrimero")
let botonEliminarUltimo = document.getElementById("eliminarUltimo")
let botonUltimo = document.getElementById("reaparecerUltimo")
let botonPrimero = document.getElementById("reaparecerPrimero")

let original = Array.from(contenedor.querySelectorAll("p")) // orden original
let papelera = []

function reinsertar(p){
    let posicion = original.indexOf(p)

    let siguiente = null
    for(let i = posicion + 1; i < original.length; i++){
        if(contenedor.contains(original[i])){
            siguiente = original[i]
            break
        }
    }

    contenedor.insertBefore(p, siguiente)
}

// elimina el primer párrafo que quede en la página
botonEliminarPrimero.addEventListener("click", function(){
    let p = contenedor.querySelector("p")
    if(p){
        papelera.push(p)
        p.remove()
    }
})

// elimina el último párrafo que quede en la página
botonEliminarUltimo.addEventListener("click", function(){
    let p = contenedor.querySelector("p:last-of-type")
    if(p){
        papelera.push(p)
        p.remove()
    }
})

// del último eliminado al primero
botonUltimo.addEventListener("click", function(){
    if(papelera.length > 0){
        reinsertar(papelera.pop())
    }
})

// del primer eliminado al último
botonPrimero.addEventListener("click", function(){
    if(papelera.length > 0){
        reinsertar(papelera.shift())
    }
})