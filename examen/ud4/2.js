let div = document.getElementById("div")
let salida = ""

const productos = [
    { nombre: "Camiseta", precio: 20 }, 
    { nombre: "Pantalón", precio: 30 }, 
    { nombre: "Zapatos", precio: 50 } 
];

function incrementar10(array){
    array.forEach(elemento => {
        elemento.precio = Math.round(elemento.precio * 1.10)
    });
    return array
}
let nuevo = incrementar10(productos)
nuevo.forEach(prod => {
    salida += prod.nombre + " - " + prod.precio + "<br>" 
})

div.innerHTML = salida

