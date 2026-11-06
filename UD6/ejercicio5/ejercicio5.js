const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
const enviar = document.getElementById("enviar");

let emailValido = false;
let passwordValida = false;

function actualizarBoton() {
  enviar.disabled = !(emailValido && passwordValida);
}

email.addEventListener("blur", () => {
  emailValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim());
  errorEmail.textContent = emailValido ? "" : " Formato esperado: xxxx@yyyy.zzzz";
  actualizarBoton();
});

password.addEventListener("blur", () => {
  passwordValida = password.value.length >= 8 && password.value.length <= 10;
  errorPassword.textContent = passwordValida ? "" : " Debe tener entre 8 y 10 caracteres";
  actualizarBoton();
});

email.addEventListener("focus", () => { errorEmail.textContent = ""; });
password.addEventListener("focus", () => { errorPassword.textContent = ""; });

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  if (emailValido && passwordValida) alert("Formulario válido y enviado");
});
