// Devuelve una promesa que se resuelve o se rechaza según el parámetro
function simulaProceso(exito) {
  return new Promise((resolve, reject) => {
    if (exito) {
      resolve("Proceso exitoso");
    } else {
      reject("Hubo un error");
    }
  });
}

// Con then-catch
simulaProceso(true).then(res => console.log("then:", res)).catch(err => console.log("catch:", err));
simulaProceso(false).then(res => console.log("then:", res)).catch(err => console.log("catch:", err));

// Con async-await
async function probar(exito) {
  try {
    const res = await simulaProceso(exito);
    console.log("await:", res);
  } catch (err) {
    console.log("await error:", err);
  }
}
probar(true);
probar(false);
