import cipher from "./cipher.js";
let bottonTest = document.getElementById("myFirstButton");
bottonTest.addEventListener("click", capturar);

function capturar() {
  var name = document.getElementById("name1").value;
  var greet = document.getElementById("greet1");
  greet.innerText = "Bienvenid@ " + name + "." + " Descifra nuestro mensaje y/o cifra tu mensaje.";
}

let buttonSend = document.getElementById("enviar");
buttonSend.addEventListener("click", capTextOffset)

function capTextOffset() {
  let offset = document.getElementById("offsetpract").value; // NUMEROS DE CUANTO  VA A CORRER
  let message = document.getElementById("original").value;// MENSAJE DEL USUARIO
  const encodeMesg = cipher.encode(offset, message);//LLAMADO CIPHER
  document.getElementById("encrypted").value = encodeMesg; // CAJITA FINAL CON MENSAJE CODIFICADO
}


let buttonSend2 = document.getElementById("enviar2");
buttonSend2.addEventListener("click", capTextOffset2)

function capTextOffset2() {
  let offset2 = document.getElementById("offsetpract").value;
  let message2 = document.getElementById("original").value;
  const decodeMesg = cipher.decode(offset2, message2);
  document.getElementById("encrypted").value = decodeMesg;
}
