let p = document.getElementById("resultado")

function temporizador(ms){
    return new Promise(function(resolve, reject){

        // Temporizador de éxito: se cumple cuando pasan los ms indicados
        let tiempoOk = setTimeout(function(){
            clearTimeout(tiempoError)   // cancela el temporizador de error
            resolve("Tiempo concluido")
        }, ms)

        // Temporizador de error: salta si pasa el doble de tiempo
        let tiempoError = setTimeout(function(){
            clearTimeout(tiempoOk)      // cancela el temporizador de éxito
            reject("El tiempo no va bien")
        }, ms * 2)
    })
}

// Se invoca con 5 segundos y se escribe el resultado en el HTML
temporizador(5000)
    .then(function(mensaje){
        p.textContent = mensaje
    })
    .catch(function(error){
        p.textContent = error
    })