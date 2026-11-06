const capa1 = document.getElementById("capa1");
const capa2 = document.getElementById("capa2");

capa1.addEventListener("dragstart", (event) => {
  capa1.style.opacity = "0.5";
  event.dataTransfer.setData("text/plain", "capa1");
});

capa1.addEventListener("dragend", () => {
  capa1.style.opacity = "1";
});

capa2.addEventListener("dragover", (event) => {
  event.preventDefault();
  capa2.style.backgroundColor = "red";
});

capa2.addEventListener("dragleave", () => {
  capa2.style.backgroundColor = "white";
});

capa2.addEventListener("drop", (event) => {
  event.preventDefault();
  if (event.dataTransfer.getData("text/plain") === "capa1") {
    capa1.remove();
    capa2.style.backgroundColor = "white";
    capa2.textContent = "Lo has logrado";
  }
});
