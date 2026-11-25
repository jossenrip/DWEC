let p = document.getElementById("visitas")

// Guarda una cookie con nombre, valor y duración en días
function guardarCookie(clave, valor, dias){
    let fecha = new Date()
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000)
    document.cookie = clave + "=" + valor +
                      "; expires=" + fecha.toUTCString() + "; path=/"
}

// Devuelve el valor de una cookie, o null si no existe
function leerCookie(clave){
    let cookies = document.cookie.split("; ")
    for(let i = 0; i < cookies.length; i++){
        let partes = cookies[i].split("=")
        if(partes[0] === clave){
            return partes[1]
        }
    }
    return null
}

// Borra una cookie poniéndole una fecha de caducidad ya pasada
function borrarCookie(clave){
    document.cookie = clave + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
}

// Se lee el contador (si no existe la cookie, empieza en 0) y se suma esta visita
let visitas = parseInt(leerCookie("visitas")) || 0
visitas++

if(visitas > 10){
    // Más de 10 visitas: se borra la cookie y el contador vuelve a cero
    borrarCookie("visitas")
    visitas = 0
    p.textContent = "Has superado las 10 visitas. El contador se ha puesto a 0 y la cookie se ha borrado."
}else{
    // Se guarda el nuevo valor con caducidad de 30 días (un mes)
    guardarCookie("visitas", visitas, 30)
    p.textContent = "Número de visitas: " + visitas
}