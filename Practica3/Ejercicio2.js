function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}

// admin
verificarUsuario("llov")
  .then(res => console.log(res))    
  .catch(err => console.error(err));


