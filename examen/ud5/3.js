let div = document.getElementById("div")
let salida = ""

const Libro = {
    titulo: "100 años de soledad",
    autor: "Gabriela García",
    paginas: 412,
    publicacion: 1967,
    presentacion: function(){
        return this.titulo + 
        " tengo " + this.paginas + 
        " paginas y soy " + this.autor
        + " (" + this.publicacion + ")"
    }
}
salida = Libro.presentacion()
div.innerHTML = salida
