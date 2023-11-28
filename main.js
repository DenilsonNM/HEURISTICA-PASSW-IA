const genclave = (base, length) => {
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

  // if (isNaN(length) || length <= 0) {
  //   alert("Ingrese una longitud de contraseña válida.");
  //   return;
  // }

  let base = "";

  base += document.getElementById("Res1").value;
  base += document.getElementById("Res2").value;
  base += document.getElementById("Res3").value;
  base += document.getElementById("Res4").value;
  base += document.getElementById("Res5").value;
  base += document.getElementById("Res6").value;
  base += document.getElementById("Res7").value;

  const simbol = "!@#$%^&*.?_+-";

  if (document.getElementById("checkbox1").checked) {
    base += simbol;
  }

  document.getElementById("CadRes").innerText = genclave(base, length);

  //para main2

  // const generatedPassword = genclave(base, length);

  // localStorage.setItem("generatedPassword", generatedPassword);

  // document.getElementById("CadRes").innerText = generatedPassword;
};

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", generate);

  // document.getElementById("btngen").addEventListener("click", () => {
  //   generate();
  // });
});
