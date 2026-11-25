let div = document.getElementById("div")
let salida = ""

const Persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    presentacion: function(){
        return this.nombre + 
        " tengo " + this.edad + 
        " y soy " + this.profesion
    },
    
    cumplirAnios: function(){
        this.edad = this.edad + 1
    } 
}
Persona.cumplirAnios()
salida = Persona.presentacion()
div.innerHTML = salida
