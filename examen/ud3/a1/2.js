const paises = [
    "españa", "francia", "marruecos"
]
let p = document.getElementById("paises")
let salida = ""

for(i = 0; i < paises.length; i++){
    salida += paises[i] + " "
}

//A partir del indice 1 borra el y el siguiente (2)
paises.splice(1, 2)

salida += "<br>"
for(i = 0; i < paises.length; i++){
    salida += paises[i] + " "
}
p.innerHTML += salida