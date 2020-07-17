// Initializing correctly the page
window.addEventListener('load', start);

// Definition of a global variable
var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;

function start() {
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var formName = document.querySelector('#formName');
  formName.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  inputName.focus();
}
