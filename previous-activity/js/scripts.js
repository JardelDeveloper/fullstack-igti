window.addEventListener('load', start);

function start() {
  var inputYear = document.querySelector('#inputYear');
  var buttonCalc = document.querySelector('#buttonCalc');
  inputYear.addEventListener('click', showYear);
  buttonCalc.addEventListener('click', calc);

  showYear();
  activateInput();
}

function showYear() {
  var textYearly = document.querySelector('#textYearly');
  var date = new Date();
  var yearly = date.getFullYear();
  var yearly = new Date().getFullYear();

  textYearly.textContent = 'Ano atual: ' + yearly;

  function handleYear(event) {
    var yearPerson = event.target.value;
    totalYear = yearly - yearPerson;
  }

  inputYear.addEventListener('keyup', handleYear);
}

function calc() {
  if (totalYear < 16) {
    alert(inputName.value + ' , você ainda não tem idade para votar');
  } else if (totalYear >= 18 && totalYear < 70) {
    alert(inputName.value + ' , o seu voto é obrigatório');
  } else {
    alert(inputName.value + ' , o seu voto é facultativo');
  }

  showYear();
  handleYear();
}

function activateInput() {
  inputName.focus();
}
