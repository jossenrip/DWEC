for (let i = 1; i <= 50; i++) {
    let combinacion = new Set();
  
    while (combinacion.size < 6) {
      combinacion.add(Math.floor(Math.random() * 49) + 1);
    }
  
    let numeros = [...combinacion].sort((a, b) => a - b);
    console.log("Combinación " + i + ": " + numeros.join(", "));
  }