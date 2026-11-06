const fondo = document.getElementById("imagen");

document.addEventListener("keydown", (event) => {
  if (event.altKey && event.key === "F12") {
    event.preventDefault();
    fondo.style.backgroundImage = `url("https://picsum.photos/1920/1080?random=${Date.now()}")`;
  }
});
