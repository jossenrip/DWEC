let div = document.getElementById("div")
let salida = ""

class Coche{
    constructor(marca, modelo, anio){
        this.marca = marca
        this.modelo = modelo
        this.anio = anio
    }
    presentacion(){
        return this.marca + 
        " " + this.modelo + 
        " (" + this.anio + ")"
    }
}

let coche1 = new Coche("Seat", "Panda", 2015)
let coche2 = new Coche("Seat", "Arona", 2022)
salida = coche1.presentacion() + "<br>"
salida += coche2.presentacion()
div.innerHTML = salida
