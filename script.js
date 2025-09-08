function mostrarApp() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("app").style.display = "block";
}

function traducir() {
  const texto = document.getElementById("texto").value;
  // Traducción simulada
  let resultado = "";
  if (texto.toLowerCase() === "hola") {
    resultado = "Hello";
  } else if (texto.toLowerCase() === "gracias") {
    resultado = "Thank you";
  } else {
    resultado = "Traducción simulada...";
  }
  document.getElementById("resultado").innerText = resultado;
}
