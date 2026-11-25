document.addEventListener("keydown", function(event){
    if(event.altKey && event.key === "F12"){
        event.preventDefault()
        let aleatorio = Math.floor(Math.random() * 100000)
        document.body.style.backgroundImage =
            "url('https://picsum.photos/1920/1080?random=" + aleatorio + "')"
    }
})