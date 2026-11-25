let origen = document.getElementById("origen")
let destino = document.getElementById("destino")

// Empieza el arrastre: la capa origen se ve al 50%
origen.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text", "origen")
    origen.style.opacity = "0.5"
})

// Termina el arrastre (se suelte donde se suelte): vuelve la opacidad
origen.addEventListener("dragend", function(){
    origen.style.opacity = "1"
})

// Hay que cancelar dragover para que el destino acepte el drop
destino.addEventListener("dragover", function(event){
    event.preventDefault()
})

// Al entrar con la capa arrastrada sobre el destino: fondo rojo
destino.addEventListener("dragenter", function(event){
    event.preventDefault()
    destino.style.backgroundColor = "red"
})

// Al salir del destino sin soltar: vuelve a blanco
destino.addEventListener("dragleave", function(){
    destino.style.backgroundColor = "white"
})

// Al soltar: el origen desaparece y el destino cambia el texto
destino.addEventListener("drop", function(event){
    event.preventDefault()
    origen.style.display = "none"
    destino.textContent = "Lo has logrado"
    destino.style.backgroundColor = "green"
})