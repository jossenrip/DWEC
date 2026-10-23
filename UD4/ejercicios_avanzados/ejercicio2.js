const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 }
];

productos.forEach((producto) => {
    producto.precio = Math.round(producto.precio * 1.1 * 100) / 100;
});

console.log(productos);
