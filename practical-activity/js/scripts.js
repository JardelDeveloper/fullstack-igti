window.addEventListener('load', start);

function start() {
  console.log('start');

  var inputYear = document.querySelector('#inputYear');
  var buttonCalc = document.querySelector('#buttonCalc');
  inputYear.addEventListener('click', showYear);
  buttonCalc.addEventListener('click', calc);

  activateInput();
}

function showYear() {
  var textYearly = document.querySelector('#textYearly');
  var date = new Date();
  var yearly = date.getFullYear();
  var yearly = new Date().getFullYear();

  textYearly.textContent = 'Ano atual: ' + yearly;
  console.log(yearly);

  function handleYear(event) {
    var total = event.target.value;
    teste = yearly - total;
  }

  inputYear.addEventListener('keyup', handleYear);
}

function calc() {
  alert(inputName.value + ' , você tem ' + teste + ' anos');
  showYear();
  handleYear();
}

function activateInput() {
  inputName.focus();
}
