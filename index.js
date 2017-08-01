'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

console.log(greet('world!'));
console.log(arithmetic.sub(100, 20));

const main = () => {
  let result = greet(process.argv[2]);
  console.log(result);
  return result;
}

main();
