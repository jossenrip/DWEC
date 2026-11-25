let p = document.getElementById("posicion")

document.addEventListener("mousemove", function(event){
    p.textContent = "X: " + event.clientX + " - Y: " + event.clientY
})