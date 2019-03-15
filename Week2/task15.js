console.log(`More JavaScript`);
console.log(`
Task 15 `); // testing the equality of the same arrays
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log('I think x == y is true');
console.log('I think x === y is true');
console.log('I think z == y is true');
console.log('I think z == x is true');

function equalityTest(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

equalityTest(x, y);
equalityTest(z, y);
equalityTest(z, x);

