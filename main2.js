document.addEventListener("DOMContentLoaded", function () {
  let resultadoMostrar =
    localStorage.getItem("generatedPassword") || "No hay resultado";

  document.getElementById("CadRes").innerText = resultadoMostrar;
});
