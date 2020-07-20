'use strict'; // Javascript accuses more errors

console.log('start');

// var x let

// var - the scope is embrancing
// let - the scope is reduced

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var' + i);
  }

  i = 20;
  console.log(i);
}

function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('let' + i);
  }

  // There is an 'error' because with the 'let' the scope is reduced
  // i = 20;
  // console.log(i);
}

withVar();
withLet();

// const - we can't reassign values

// const c = 10;
// c = 20;

const d = [];
console.log(d);

d.push(1);
console.log(d);

function sum(a, b) {
  return a + b;
}

// anonymous function
const sum2 = function (a, b) {
  return a + b;
};

// arrow function
const sum3 = (a, b) => {
  return a + b;
};

// arrow function reduced
const sum4 = (a, b) => a + b;

// test of console
console.log(sum(2, 3));
console.log(sum2(2, 3));
console.log(sum3(2, 3));
console.log(sum4(2, 3));

// template literals

const name = 'Raphael';
const surName = 'Gomide';
const text1 = 'Meu nome é ' + name + ' ' + surName;
const text2 = `Meu nome é ${name} ${surName}`;

console.log(text1);
console.log(text2);

// default parameters
const sum5 = (a, b = 10) => a + b;
console.log(sum5(2));
console.log(sum5(2, 8));

console.log(people);
