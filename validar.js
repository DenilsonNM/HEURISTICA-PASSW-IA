function validateForm() {
  var contr = document.getElementById("contr").value;

  if (contr.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return false;
  }

  var regex = /^(?=.*[a-z])(?=.*[A-Z])/;

  if (!regex.test(contr)) {
    alert("La contraseña debe contener al menos una mayúscula, una minúscula");
    return false;
  }

  var tieneSimbolos = /[!@#$%^&*.?_+-]/.test(contr);
  if (!tieneSimbolos) {
    alert("La contraseña debe contener al menos un símbolo.");
    return false;
  }
  return true;
}
