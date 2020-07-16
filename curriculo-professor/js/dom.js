/* Changing Title */
var title = document.querySelector('h1');
title.textContent = 'Raphael Gomide';

/* Query Selector initial */
var personalData = document.querySelector('.personal-data');
console.log(personalData);

/* Query Selector All with Array.From */
var personalData = document.querySelectorAll('li');
personalData = Array.from(personalData);
console.log(personalData);

/* Summary of Query Selector All with Array.From */
var div = Array.from(document.querySelectorAll('div'));
console.log(div);

/* Change color of li */
var li = Array.from(document.querySelectorAll('.customli'));
for (var i = 0; i < li.length; i++) {
  var teste = li[i];
  teste.style.color = 'blue';
}

/* Change class of li with for getting "var li" before */
for (var i = 0; i < li.length; i++) {
  var currentElement = li[i];
  currentElement.classList.add('emphasis');
}

/* Add class of table */
var h1 = document.querySelector('table');
h1.classList.add('table-custom');
