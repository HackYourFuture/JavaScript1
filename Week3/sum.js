console.log(`------- 1 -------`);
console.log(`Create a function that takes 3 arguments and returns the sum of the these arguments:`)

function findSum(a, b, c) {
  return a + b + c;
}

const addend1 = 7;
const addend2 = 11;
const addend3 = 23;

let sum = findSum(addend1, addend2, addend3);

console.log(`The sum of ${addend1} + ${addend2} + ${addend3} = ${sum}`);
console.log(`\n`);
