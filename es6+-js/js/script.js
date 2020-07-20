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
