const parrafos = document.querySelectorAll(".parrafo");
const botonReaparecer = document.getElementById("reaparecer");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("click", () => {
    parrafo.hidden = true;
  });

  parrafo.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    parrafo.remove();
  });
});

botonReaparecer.addEventListener("click", () => {
  document.querySelectorAll(".parrafo").forEach((parrafo) => {
    parrafo.hidden = false;
  });
});
