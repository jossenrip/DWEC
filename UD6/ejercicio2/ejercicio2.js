const posicion = document.getElementById("posicion");

document.addEventListener("mousemove", (event) => {
  posicion.textContent = `Posición X: ${event.clientX}, posición Y: ${event.clientY}`;
});
