/* Initial Console */
console.log('Hello World!');

/* Change the 'H1' Curriculum Title */
var title = document.querySelector('h1');
title.textContent = 'O título do Raphael Gomes foi modificado por Jardel Cunha';

/* Testing if and else with keys */
var a = 10;
var b = 6;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + ' é igual a ' + b);
  }
}

/* Testing if and else without keys */
var c = 4;
var d = 5;

if (c > d) console.log(c + ' é maior que ' + d);
else if (c < d) console.log(c + ' é menor que ' + d);
else console.log(c + ' é igual a ' + d);
