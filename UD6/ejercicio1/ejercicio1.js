const boton = document.getElementById("nuevoNumero");
const lista = document.getElementById("listaNumeros");

boton.addEventListener("click", () => {
  const elemento = document.createElement("li");
  elemento.textContent = Math.floor(Math.random() * 100) + 1;
  lista.appendChild(elemento);
});
