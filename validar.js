function validateForm() {

  var contr = document.getElementById("contr").value;

  if (contr.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return false;
  }

  // Validar la presencia de símbolos
  var tieneSimbolos = /[?@&%$#.+-_]/.test(contr);
  if (!tieneSimbolos) {
    alert("La contraseña debe contener al menos un símbolo [?@&%$#.+-_].");
    return false;
  }
  return true;
}
