const genclave = (base, length) => {
  let password = "";
  for (let x = 0; x < length; x++) {
    let random = Math.floor(Math.random() * base.length);
    password += base.charAt(random);
  }
  return password;
};

const generate = () => {
  let length = parseInt(document.getElementById("longcon").value);

  if (isNaN(length) || length <= 0) {
    alert("Ingrese una longitud de contraseña válida.");
    return;
  }

  let base = "";

  base += document.getElementById("text1").value;
  base += document.getElementById("text2").value;
  base += document.getElementById("text3").value;
  base += document.getElementById("text4").value;
  base += document.getElementById("text5").value;
  base += document.getElementById("text6").value;
  base += document.getElementById("text7").value;

  const simbol = "?@&%$#.+-_";

  if (document.getElementById("checkbox1").checked) {
    base += simbol;
  }

  document.getElementById("clavegen").innerText = genclave(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btngen").addEventListener("click", () => {
    generate();
  });
});
