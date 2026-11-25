let contenedor = document.getElementById("contenedor")
let botonEliminar = document.getElementById("eliminar")
let botonUltimo = document.getElementById("reaparecerUltimo")
let botonPrimero = document.getElementById("reaparecerPrimero")

let papelera = []

botonEliminar.addEventListener("click", function(){
    let p = contenedor.querySelector("p")
    if(p){
        papelera.push(p)
        p.remove()
    }
})

// del último eliminado al primero
botonUltimo.addEventListener("click", function(){
    if(papelera.length > 0){
        contenedor.appendChild(papelera.pop())
    }
})

// del primer eliminado al último
botonPrimero.addEventListener("click", function(){
    if(papelera.length > 0){
        contenedor.appendChild(papelera.shift())
    }
})