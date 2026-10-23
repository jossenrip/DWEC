const filtro = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
};

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const numeros = [1, 2, 3, 4];
filtro(numeros, (n) => n * 2);
console.log(numeros);

const palabras = ["hola", "mundo", "javascript"];
filtro(palabras, (palabra) => palabra.toUpperCase());
console.log(palabras);

const factoriales = [3, 4, 5, 6];
filtro(factoriales, factorial);
console.log(factoriales);
