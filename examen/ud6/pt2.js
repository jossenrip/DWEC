// Referencias a los elementos del HTML (buscados por su id)
let formulario = document.getElementById("formulario")
let email = document.getElementById("email")
let password = document.getElementById("password")
let errorEmail = document.getElementById("errorEmail")       // span donde sale el error del email
let errorPassword = document.getElementById("errorPassword") // span donde sale el error del password
let enviar = document.getElementById("enviar")

// Guardan si cada campo es válido ahora mismo
let emailValido = false
let passwordValido = false

// Activa o desactiva el botón según el estado de los dos campos
function actualizarBoton(){
    if(emailValido && passwordValido){
        enviar.disabled = false              // botón usable
        enviar.style.backgroundColor = ""    // quita el gris
    }else{
        enviar.disabled = true               // botón bloqueado
        enviar.style.backgroundColor = "gray"
    }
}

// EMAIL: se valida al perder el foco (blur)
email.addEventListener("blur", function(){
    // Patrón: texto + @ + texto + . + texto, sin espacios (xxxx@yyyy.zzzz)
    let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(patron.test(email.value)){
        emailValido = true                   // formato correcto: no se muestra nada
    }else{
        emailValido = false
        errorEmail.textContent = "Formato esperado: xxxx@yyyy.zzzz" // muestra el error
    }
    actualizarBoton()
})

// EMAIL: al volver a entrar (focus) se borra el error y se invalida hasta nueva comprobación
email.addEventListener("focus", function(){
    errorEmail.textContent = ""
    emailValido = false
    actualizarBoton()
})

// PASSWORD: se valida al perder el foco (blur)
password.addEventListener("blur", function(){
    // Longitud entre 8 y 10 caracteres
    if(password.value.length >= 8 && password.value.length <= 10){
        passwordValido = true
    }else{
        passwordValido = false
        errorPassword.textContent = "Formato esperado: texto de 8 a 10 caracteres"
    }
    actualizarBoton()
})

// PASSWORD: al volver a entrar se borra el error
password.addEventListener("focus", function(){
    errorPassword.textContent = ""
    passwordValido = false
    actualizarBoton()
})

// Seguridad extra: si el formulario no es válido, se cancela el envío
formulario.addEventListener("submit", function(event){
    if(!(emailValido && passwordValido)){
        event.preventDefault()
    }
})