// Devuelve una promesa que se cumple pasados "ms" milisegundos.
// Si pasa el doble de tiempo sin cumplirse, se rechaza.
function temporizador(ms) {
  return new Promise((resolve, reject) => {
    const cumplido = setTimeout(() => {
      clearTimeout(fallo); // cancelamos el temporizador de error
      resolve("Tiempo concluido");
    }, ms);

    const fallo = setTimeout(() => {
      clearTimeout(cumplido);
      reject("El tiempo no va bien");
    }, ms * 2);
  });
}

// Invocamos la función con 5 segundos y escribimos el resultado en el HTML
const resultado = document.getElementById("resultado");
temporizador(5000)
  .then(texto => resultado.textContent = texto)
  .catch(error => resultado.textContent = error);
