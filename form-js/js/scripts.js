/* Loading page more security */
window.addEventListener('load', start);

function start() {
  console.log('Página carregada');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);
}

/* Character Count of Input Name */
function countName(event) {
  // console.log(event);
  var count = event.target.value;

  var spanTag = document.querySelector('#nameLength');
  spanTag.textContent = 'Contagem de caracteres do nome: ' + count.length;
}
