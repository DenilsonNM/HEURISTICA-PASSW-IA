const genclave = (base, length)=>{
  let password = "";
  for(let x = 0; x < length; x++){
    let random = Math.floor(Math.random() * base.length);
    password += base.charAt(random);
  }
  return password;
};

const generate = () => {
  let length = parseInt(document.getElementById("longcon").value);

  let base = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  // const numeros = "0123456789";
  const simbol = "?@&%$#.";

  if (document.getElementById("checkbox1").checket) {
    base += simbol;
  };

  document.getElementById("clavegen").innerText= genclave(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btngen").addEventListener("click", () => {
    generate();
  });
});
