let div = document.getElementById("div")
let salida = ""

class Animal{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    emitirSonido(){
        return "sonido genérico"
    }
}
class Perro extends Animal{
    emitirSonido(){
        return "Guau"
    }
}
class Gato{
    emitirSonido(){
        return "Miau"
    }
}

let perro = new Perro("Pipa", 12)
let gato = new Gato("Pinky", 9)
salida = perro.emitirSonido() + "<br>"
salida += gato.emitirSonido()
div.innerHTML = salida
