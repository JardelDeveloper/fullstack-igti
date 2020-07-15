/* Sum Function */
function sum(a, b) {
  return a + b;
}

/* Compare with Arguments */
console.log('A soma de A e B = ' + sum(1, 2));

function compareNumbers(a, b) {
  // return a > b ? 1 : a < b ? -1 : 0;
  return a - b;
}

console.log(compareNumbers(3, 3));
console.log(compareNumbers(2, 1));
console.log(compareNumbers(1, 2));

/* Sum with FOR */
function superSum(from, upTo) {
  var sum = 0;

  for (var i = from; i <= upTo; i++) {
    sum += i;
  }
  return sum;
}

console.log(superSum(1, 10));
console.log(superSum(9, 100));
console.log(superSum(200, 1000));
