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

/* if-else example */
var dia = 2;
if (dia === 1) {
  console.log('Domingo');
} else {
  if (dia === 2) {
    console.log('Segunda');
  } else {
    if (dia === 3) {
      console.log('Terça');
    } else {
      if (dia === 4) {
      } else {
        if (dia === 5) {
          console.log('Quinta');
        } else {
          if (dia === 6) {
            console.log('Sexta');
          } else {
            if (dia === 7) {
              console.log('Sábado');
            } else {
              console.log('Dia inválido');
            }
          }
        }
      }
    }
  }
}

/* switch example */
var dia = 11;
var r;

// prettier-ignore
switch (dia) {
  case 1: r = 'Domingo'; break;
  case 2: r = 'Segunda'; break;
  case 3: r = 'Terça'; break;
  case 4: r = 'Quarta'; break;
  case 5: r = 'Quinta'; break;
  case 6: r = 'Sexta'; break;
  case 7: r = 'Sábado'; break;
  
  default: r = 'Dia inválido';
}

console.log(r);
