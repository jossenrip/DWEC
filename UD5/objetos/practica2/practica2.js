function Ordenador(marca, modelo, ram = 4, disco = 512, pulgadas = 17) {
  if (!marca || !modelo) {
    throw new Error("La marca y el modelo son obligatorios");
  }
  this.marca = marca;
  this.modelo = modelo;
  this.ram = ram;
  this.disco = disco;
  this.pulgadas = pulgadas;
}

Ordenador.prototype.toString = function () {
  return (
    "Marca: " + this.marca +
    ", Modelo: " + this.modelo +
    ", RAM: " + this.ram + " GB" +
    ", Disco duro: " + this.disco + " GB" +
    ", Pantalla: " + this.pulgadas + " pulgadas"
  );
};

function Portatil(marca, modelo, ram = 4, disco = 256, pulgadas = 12, autonomia = 4) {
  Ordenador.call(this, marca, modelo, ram, disco, pulgadas);
  this.autonomia = autonomia;
}

Portatil.prototype = Object.create(Ordenador.prototype);
Portatil.prototype.constructor = Portatil;

Portatil.prototype.toString = function () {
  return Ordenador.prototype.toString.call(this) +
    ", Autonomía: " + this.autonomia + " horas";
};

//Pruebas DOM
const resultados = document.getElementById("resultados");

function mostrar(descripcion, obtenido, esperado) {
  const ok = obtenido === esperado;
  const li = document.createElement("li");
  li.textContent =
    descripcion +
    " -> obtenido: " + obtenido +
    ", esperado: " + esperado +
    " [" + (ok ? "OK" : "ERROR") + "]";
  li.className = ok ? "ok" : "error";
  resultados.appendChild(li);
}

// 1. Ordenador con todos los valores
const o1 = new Ordenador("Dell", "XPS 15", 16, 1024, 15);
mostrar("Marca de o1", o1.marca, "Dell");
mostrar("Modelo de o1", o1.modelo, "XPS 15");
mostrar("RAM de o1", o1.ram, 16);
mostrar("Disco de o1", o1.disco, 1024);
mostrar("Pulgadas de o1", o1.pulgadas, 15);

// 2. Ordenador con valores por defecto
const o2 = new Ordenador("HP", "Pavilion");
mostrar("RAM por defecto de ordenador", o2.ram, 4);
mostrar("Disco por defecto de ordenador", o2.disco, 512);
mostrar("Pulgadas por defecto de ordenador", o2.pulgadas, 17);

// 3. Marca y modelo obligatorios
let errorSinModelo = false;
try {
  new Ordenador("Lenovo");
} catch (e) {
  errorSinModelo = true;
}
mostrar("Ordenador sin modelo lanza error", errorSinModelo, true);

let errorSinNada = false;
try {
  new Ordenador();
} catch (e) {
  errorSinNada = true;
}
mostrar("Ordenador sin marca ni modelo lanza error", errorSinNada, true);

// 4. toString de ordenador
mostrar(
  "toString de o1",
  o1.toString(),
  "Marca: Dell, Modelo: XPS 15, RAM: 16 GB, Disco duro: 1024 GB, Pantalla: 15 pulgadas"
);

// 5. Portátil con todos los valores
const p1 = new Portatil("Asus", "ZenBook", 8, 512, 14, 10);
mostrar("Marca de p1", p1.marca, "Asus");
mostrar("RAM de p1", p1.ram, 8);
mostrar("Disco de p1", p1.disco, 512);
mostrar("Pulgadas de p1", p1.pulgadas, 14);
mostrar("Autonomía de p1", p1.autonomia, 10);

// 6. Portátil con valores por defecto
const p2 = new Portatil("Acer", "Aspire");
mostrar("RAM por defecto de portátil", p2.ram, 4);
mostrar("Disco por defecto de portátil", p2.disco, 256);
mostrar("Pulgadas por defecto de portátil", p2.pulgadas, 12);
mostrar("Autonomía por defecto de portátil", p2.autonomia, 4);

// 7. Marca y modelo obligatorios también en portátil
let errorPortatil = false;
try {
  new Portatil("Acer");
} catch (e) {
  errorPortatil = true;
}
mostrar("Portátil sin modelo lanza error", errorPortatil, true);

// 8. Herencia
mostrar("p1 es instancia de Portatil", p1 instanceof Portatil, true);
mostrar("p1 es instancia de Ordenador", p1 instanceof Ordenador, true);
mostrar("o1 no es instancia de Portatil", o1 instanceof Portatil, false);

// 9. toString de portátil (añade la autonomía)
mostrar(
  "toString de p1",
  p1.toString(),
  "Marca: Asus, Modelo: ZenBook, RAM: 8 GB, Disco duro: 512 GB, Pantalla: 14 pulgadas, Autonomía: 10 horas"
);
