let contenido = document.getElementById("contenido")

// Guarda una cookie con nombre, valor y duración en días
function guardarCookie(clave, valor, dias){
    let fecha = new Date()
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000)
    document.cookie = clave + "=" + encodeURIComponent(valor) +
                      "; expires=" + fecha.toUTCString() + "; path=/"
}

// Devuelve el valor de una cookie, o null si no existe
function leerCookie(clave){
    let cookies = document.cookie.split("; ")
    for(let i = 0; i < cookies.length; i++){
        let partes = cookies[i].split("=")
        if(partes[0] === clave){
            return decodeURIComponent(partes[1])
        }
    }
    return null
}

// Al cargar la página: si existe la cookie, se muestra la bienvenida
let nombreGuardado = leerCookie("nombre")
if(nombreGuardado){
    contenido.innerHTML = "<p>Bienvenido, " + nombreGuardado + "</p>"
}else{
    // Si no existe, se activa el botón Guardar
    document.getElementById("guardar").addEventListener("click", function(){
        let nombre = document.getElementById("nombre").value
        if(nombre !== ""){
            guardarCookie("nombre", nombre, 7)
            contenido.innerHTML = "<p>Bienvenido, " + nombre + "</p>"
        }
    })
}