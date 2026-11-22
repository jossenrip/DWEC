// Devuelve el valor de una cookie o null si no existe
function leerCookie(nombre) {
  const cookie = document.cookie.split("; ").find(c => c.startsWith(nombre + "="));
  return cookie ? cookie.split("=")[1] : null;
}

// Leemos las visitas anteriores y sumamos la actual
let visitas = Number(leerCookie("visitas")) + 1;

if (visitas > 10) {
  // Más de 10 visitas: borramos la cookie (max-age=0) y ponemos el contador a cero
  document.cookie = "visitas=; max-age=0; path=/";
  visitas = 0;
  document.getElementById("aviso").textContent = "Has superado 10 visitas, el contador se ha reiniciado.";
} else {
  // Guardamos la cookie con caducidad de un mes (30 días en segundos)
  document.cookie = "visitas=" + visitas + "; max-age=" + 30 * 24 * 60 * 60 + "; path=/";
}

document.getElementById("visitas").textContent = "Número de visitas: " + visitas;
