// Devuelve el valor de una cookie o null si no existe
function leerCookie(nombre) {
  const cookie = document.cookie.split("; ").find(c => c.startsWith(nombre + "="));
  return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
}

const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

// Muestra el saludo y oculta el formulario
function mostrarBienvenida(nombre) {
  formulario.style.display = "none";
  mensaje.textContent = "Bienvenido, " + nombre;
}

// Al cargar la página: si existe la cookie, saludamos
const nombreGuardado = leerCookie("nombre");
if (nombreGuardado) {
  mostrarBienvenida(nombreGuardado);
}

// Al pulsar "Guardar": creamos la cookie con duración de 7 días (en segundos)
document.getElementById("guardar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  document.cookie = "nombre=" + encodeURIComponent(nombre) + "; max-age=" + 7 * 24 * 60 * 60 + "; path=/";
  mostrarBienvenida(nombre);
});
