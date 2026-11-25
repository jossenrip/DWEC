let boton = document.getElementById("reaparecer")

document.querySelectorAll("p").forEach(function(p){
    p.addEventListener("click", function(){
        p.style.display = "none"
    })

    p.addEventListener("contextmenu", function(event){
        event.preventDefault()
        p.remove()
    })
})

boton.addEventListener("click", function(){
    document.querySelectorAll("p").forEach(function(p){
        p.style.display = "block"
    })
})