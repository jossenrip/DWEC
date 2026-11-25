let data = [ 
    {name: "Nacho", telephone: "966112233", age: 40}, 
    {name: "Ana", telephone: "911223344", age: 35}, 
    {name: "Mario", phone: "611998877", age: 15}, 
    {name: "Laura", telephone: "633663366", age: 17} 
];

let salida = ""
let div = document.getElementById("div")
let mayores = []

data.push(
    {name: "Pedro", telephone: "611944444", age: 25},
    {name: "Julia", telephone: "633232323", age: 37}
)

for(let i = 0; i < data.length; i++){
    salida += data[i].name + "-" +
        (data[i].telephone || data[i].phone) + "-" +
        data[i].age + "<br>"
    
    if(data[i].age > 30){
        mayores.push({
            name: data[i].name, 
            telephone: (data[i].telephone || data[i].phone), 
            age: data[i].age
        })
    }
}
salida += "<br>"
for(let i = 0; i < mayores.length; i++){
    salida += mayores[i].name + "-" +
        (mayores[i].telephone || mayores[i].phone) + "-" +
        mayores[i].age + "<br>"
}

div.innerHTML = salida