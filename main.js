const genclave = (base, length) => {
  if (length > base.length) {
    alert(
      "La longitud de la contraseña es mayor que la cantidad de caracteres disponibles."
    );
    return "";
  }

  let password = "";
  for (let x = 0; x < length; x++) {
    let random = Math.floor(Math.random() * base.length);
    password += base.charAt(random);
  }
  return password;
};

const generate = (event) => {
  event.preventDefault();

  let length = parseInt(document.getElementById("TamCon").value);

  if (length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return false;
  }

  let base = "";

  base += document.getElementById("Res1").value;
  base += document.getElementById("Res2").value;
  base += document.getElementById("Res3").value;
  base += document.getElementById("Res4").value;
  base += document.getElementById("Res5").value;
  base += document.getElementById("Res6").value;
  base += document.getElementById("Res7").value;

  let res1,
    res2,
    res3,
    res4,
    res5,
    res6,
    res7 = "";

  res1 += document.getElementById("Res1").value.slice(0, 3);
  res2 += document.getElementById("Res2").value.slice(0, 3);
  res3 += document.getElementById("Res3").value.slice(0, 3);
  res4 += document.getElementById("Res4").value.slice(0, 3);
  res5 += document.getElementById("Res5").value.slice(0, 3);
  res6 += document.getElementById("Res6").value.slice(0, 4);
  res7 += document.getElementById("Res7").value.slice(0, 2);

  const simbol = "!@#$%^&*.?_+-";

  if (document.getElementById("checkbox1").checked) {
    base += simbol;
  }

  document.getElementById("CadRes").innerText = genclave(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", generate);
});
