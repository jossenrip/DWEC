// temporizador.js

// Promesa que se cumple a los ms indicados (o se rechaza al pasar el doble)
export function temporizador(ms){
    return new Promise(function(resolve, reject){
        let tiempoOk = setTimeout(function(){
            clearTimeout(tiempoError)
            resolve("Tiempo concluido")
        }, ms)

        let tiempoError = setTimeout(function(){
            clearTimeout(tiempoOk)
            reject("El tiempo no va bien")
        }, ms * 2)
    })
}

// Cuenta atrás asíncrona
// inicio: número desde el que se cuenta
// elemento: dónde se escribe (por defecto el body)
// intervalo: ms entre cada número (por defecto 1 segundo)
// callback: función que se ejecuta al terminar
export async function cuenta(inicio, elemento = document.body, intervalo = 1000, callback){
    for(let n = inicio; n >= 0; n--){
        elemento.textContent = n
        if(n > 0){
            // espera el intervalo antes de pasar al siguiente número
            await temporizador(intervalo)
        }
    }
    if(callback){
        callback()
    }
}