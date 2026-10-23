const numeros = [1, 2, 3, 4, 5];

function sumaIterativa(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

function sumaRecursiva(array, indice = 0) {
    if (indice === array.length) {
        return 0;
    }
    return array[indice] + sumaRecursiva(array, indice + 1);
}

console.log(sumaIterativa(numeros));
console.log(sumaRecursiva(numeros));
