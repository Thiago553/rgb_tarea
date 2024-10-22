const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

function actualizarColor() {
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

function actualizarValores() {
  rojo = inputRojo.value;
  verde = inputVerde.value;
  azul = inputAzul.value;

  textoRojo.textContent = rojo;
  textoVerde.textContent = verde;
  textoAzul.textContent = azul;

  actualizarColor();
}

inputRojo.addEventListener('input', actualizarValores);

inputVerde.addEventListener('input', actualizarValores);

inputAzul.addEventListener('input', actualizarValores);

actualizarColor();