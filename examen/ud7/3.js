// ============================================================
// QUÉ ES LO ASÍNCRONO Y QUÉ SON LAS PROMESAS
// ------------------------------------------------------------
// Asíncrono: hay tareas que tardan (pedir datos a un servidor,
// leer un archivo, un temporizador). JavaScript no se queda
// parado esperando a que acaben: sigue ejecutando el resto del
// código y vuelve a la tarea cuando está lista.
//
// Promesa: objeto que representa un resultado que todavía no
// está disponible, pero que lo estará más adelante. Tiene 3 estados:
//   - pending   (pendiente): aún no ha terminado
//   - fulfilled (cumplida): terminó bien y tiene un valor (resolve)
//   - rejected  (rechazada): falló y tiene un motivo (reject)
//
// Formas de reaccionar al resultado de una promesa:
//   - then / catch
//   - async / await (hace lo mismo, pero se lee de arriba abajo)
// ============================================================

// Referencias al HTML (en este ejercicio no se usan, porque
// los resultados salen por consola; sirven si quieres pintarlos)
let div = document.getElementById("div")
let salida = ""

// Función que devuelve una promesa.
// El parámetro "exito" decide si la promesa se cumple o se rechaza.
function simulaProceso(exito){
    // new Promise recibe una función con dos parámetros:
    //   resolve -> se llama para CUMPLIR la promesa
    //   reject  -> se llama para RECHAZARLA
    return new Promise(function(resolve, reject){
        if(exito){
            resolve("Proceso exitoso") // la promesa se cumple con este valor
        }else{
            reject("Hubo un error")    // la promesa se rechaza con este motivo
        }
    })
}

// ------------------------------------------------------------
// FORMA 1: then-catch
// ------------------------------------------------------------

// Caso exitoso: exito = true, así que se llama a resolve
simulaProceso(true)
    .then(function(mensaje){
        // then se ejecuta si la promesa se cumple.
        // "mensaje" vale lo que se pasó a resolve: "Proceso exitoso"
        console.log("then-catch (true): " + mensaje)
    })
    .catch(function(error){
        // catch se ejecuta si la promesa se rechaza.
        // Aquí no se ejecutará, porque la promesa se cumplió.
        console.log("then-catch (true): " + error)
    })

// Caso fallido: exito = false, así que se llama a reject
simulaProceso(false)
    .then(function(mensaje){
        // Aquí no se ejecutará, porque la promesa se rechazó.
        console.log("then-catch (false): " + mensaje)
    })
    .catch(function(error){
        // "error" vale lo que se pasó a reject: "Hubo un error"
        console.log("then-catch (false): " + error)
    })

// ------------------------------------------------------------
// FORMA 2: async-await
// ------------------------------------------------------------

// "async" delante de la función indica que trabaja con promesas.
// Tiene dos efectos: permite usar "await" dentro y hace que la
// función devuelva siempre una promesa.
async function probar(){

    // Caso exitoso
    try{
        // "await" pausa SOLO esta función hasta que la promesa termine
        // y devuelve su valor ya resuelto (sin necesidad de .then).
        // El resto de la página sigue funcionando mientras tanto.
        let mensaje = await simulaProceso(true)
        console.log("async-await (true): " + mensaje)
    }catch(error){
        // Si la promesa se rechaza, "await" lanza un error y salta aquí.
        // Aquí no entrará, porque se cumplió.
        console.log("async-await (true): " + error)
    }

    // Caso fallido
    try{
        // La promesa se rechaza, así que "await" lanza una excepción
        // y se salta el console.log de la línea siguiente.
        let mensaje = await simulaProceso(false)
        console.log("async-await (false): " + mensaje)
    }catch(error){
        // "error" vale el motivo de reject: "Hubo un error"
        console.log("async-await (false): " + error)
    }
}

// Hay que llamar a la función para que se ejecute.
// Si solo la declaras, no hace nada.
probar()

// ------------------------------------------------------------
// ORDEN DE LA SALIDA EN CONSOLA
// Aunque todo se resuelve "al instante", then, catch y await se
// ejecutan de forma asíncrona, cuando termina el código normal.
// Por eso las líneas de then-catch y async-await salen
// intercaladas, normalmente así:
//   then-catch (true): Proceso exitoso
//   async-await (true): Proceso exitoso
//   then-catch (false): Hubo un error
//   async-await (false): Hubo un error
// ------------------------------------------------------------