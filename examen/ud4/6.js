let div = document.getElementById("div")

const personas = [
    { nombre: "Juan", edad: 17 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Pedro", edad: 19 },
    { nombre: "Laura", edad: 16 }
];

function procesar(array){
    return array
        .filter(p => p.edad > 18)
        .map(p => p.edad * 2) //Aqui p ya son las personas mayores
        //
        .reduce((acumulador, edad) => acumulador + edad, 0)
}

div.innerHTML = "Suma: " + procesar(personas)