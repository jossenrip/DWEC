let boton = document.getElementById("boton")
let lista = document.getElementById("lista")

boton.addEventListener("click", function(){
    let numero = Math.floor(Math.random() * 101)

    let li = document.createElement("li")
    li.textContent = numero
    lista.appendChild(li)
})