let personas = new Map();

personas.set("Nacho", 40);
personas.set("Ana", 35);
personas.set("Mario", 15);
personas.set("Laura", 17);

personas.set("Mario", 16);

for (let [nombre, edad] of personas) {
  console.log(nombre + ": " + edad);
}