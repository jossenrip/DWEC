function Rectangulo(width, height) {
  this.width = Rectangulo.validar(width);
  this.height = Rectangulo.validar(height);
}

Rectangulo.validar = function (valor) {
  return typeof valor === "number" && valor > 0 ? valor : 1;
};

Rectangulo.prototype.cambiarDimensiones = function (width, height) {
  this.width = Rectangulo.validar(width);
  this.height = Rectangulo.validar(height);
};

Rectangulo.prototype.calcularArea = function () {
  return this.width * this.height;
};

Rectangulo.prototype.copia = function () {
  return new Rectangulo(this.width, this.height);
};

Rectangulo.prototype.comparar = function (otro) {
  const areaActual = this.calcularArea();
  const areaOtro = otro.calcularArea();

  if (areaActual > areaOtro) return "mayor";
  if (areaActual < areaOtro) return "menor";
  return "igual";
};

const resultados = document.getElementById("resultados");

//Pruebas DOM
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

// 1. Propiedades y construcción correcta
const r1 = new Rectangulo(4, 5);
mostrar("Ancho de r1 (4, 5)", r1.width, 4);
mostrar("Alto de r1 (4, 5)", r1.height, 5);

// 2. Validación en el constructor
const r2 = new Rectangulo(0, 3);
mostrar("Ancho con 0 recibe valor por defecto", r2.width, 1);
mostrar("Alto válido se mantiene", r2.height, 3);

const r3 = new Rectangulo(-2, -7);
mostrar("Ancho negativo recibe valor por defecto", r3.width, 1);
mostrar("Alto negativo recibe valor por defecto", r3.height, 1);

// 3. calcularArea
mostrar("Área de r1", r1.calcularArea(), 20);
mostrar("Área de r2", r2.calcularArea(), 3);

// 4. cambiarDimensiones
r2.cambiarDimensiones(6, 2);
mostrar("Ancho tras cambiarDimensiones(6, 2)", r2.width, 6);
mostrar("Alto tras cambiarDimensiones(6, 2)", r2.height, 2);
mostrar("Área tras cambiarDimensiones", r2.calcularArea(), 12);

// 5. copia
const r4 = r1.copia();
mostrar("La copia tiene el mismo ancho", r4.width, r1.width);
mostrar("La copia tiene el mismo alto", r4.height, r1.height);
mostrar("La copia es otro objeto distinto", r4 !== r1, true);
r4.cambiarDimensiones(10, 10);
mostrar("Modificar la copia no afecta al original (ancho)", r1.width, 4);

// 6. comparar
const grande = new Rectangulo(10, 10);
const pequeno = new Rectangulo(2, 3);
const igualAGrande = new Rectangulo(5, 20);
mostrar("grande.comparar(pequeno)", grande.comparar(pequeno), "mayor");
mostrar("pequeno.comparar(grande)", pequeno.comparar(grande), "menor");
mostrar("grande.comparar(igualAGrande)", grande.comparar(igualAGrande), "igual");
