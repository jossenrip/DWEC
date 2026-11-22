// Divide a entre b y lanza un error si b es 0
function divide(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

// Llamamos a la función dentro de try-catch
try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // lanza el error
} catch (error) {
  console.log("Error: " + error.message);
}
