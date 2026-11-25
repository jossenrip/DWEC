function primeraTarea(){
    return new Promise(function(resolve){
        resolve(10)
    })
}

function segundaTarea(valor){
    return new Promise(function(resolve){
        resolve(valor * 2)
    })
}

function terceraTarea(valor){
    return new Promise(function(resolve){
        resolve(valor + 5)
    })
}

primeraTarea()
    .then(function(resultado1){
        console.log("Primera: " + resultado1)   // 10
        return segundaTarea(resultado1)
    })
    .then(function(resultado2){
        console.log("Segunda: " + resultado2)   // 20
        return terceraTarea(resultado2)
    })
    .then(function(resultadoFinal){
        console.log("Resultado final: " + resultadoFinal) // 25
    })