// Función de la práctica anterior: promesa que se cumple tras "ms" milisegundos
export function temporizador(ms) {
  return new Promise((resolve, reject) => {
    const cumplido = setTimeout(() => {
      clearTimeout(fallo);
      resolve("Tiempo concluido");
    }, ms);

    const fallo = setTimeout(() => {
      clearTimeout(cumplido);
      reject("El tiempo no va bien");
    }, ms * 2);
  });
}

// Pequeña pausa que usamos con await dentro de la cuenta atrás
function pausa(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Cuenta atrás asíncrona: escribe cada número en el elemento y al final ejecuta el callback
export async function cuenta(inicio, elemento = document.body, intervalo = 1000, callback) {
  for (let i = inicio; i >= 0; i--) {
    elemento.textContent = i;
    if (i > 0) {
      await pausa(intervalo);
    }
  }
  if (callback) {
    callback();
  }
}
