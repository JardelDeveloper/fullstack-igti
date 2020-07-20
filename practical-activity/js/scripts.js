window.addEventListener('load', start);

function start() {
  // console.log(textYearly);

  var inputYear = document.querySelector('#inputYear');
  inputYear.addEventListener('keyup', countName);
}

function countName() {
  var textYearly = document.querySelector('#textYearly');
  var date = new Date();
  var yearly = date.getFullYear();
  var yearly = new Date().getFullYear();

  textYearly.textContent = 'Ano atual: ' + yearly;
}
