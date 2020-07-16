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
