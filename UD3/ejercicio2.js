let valores = [];

for (let i = 0; i < 15; i++) {
  valores.push(Math.floor(Math.random() * 21));
}

console.log(valores);

let unicos = [...new Set(valores)];

console.log(unicos);