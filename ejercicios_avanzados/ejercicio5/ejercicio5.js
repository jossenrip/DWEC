// Devuelve el valor 10
function primeraTarea() {
  return new Promise(resolve => resolve(10));
}

// Recibe un valor y lo multiplica por 2
function segundaTarea(valor) {
  return new Promise(resolve => resolve(valor * 2));
}

// Recibe un valor y le suma 5
function terceraTarea(valor) {
  return new Promise(resolve => resolve(valor + 5));
}

// Encadenamos las promesas con then
primeraTarea()
  .then(segundaTarea)
  .then(terceraTarea)
  .then(resultado => console.log("Resultado final:", resultado)); // 25
