//15. Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

function myComparison(a, b) {
  if (a == b) {
    return true;
  } else if (a === b) {
    return true;
  } else {
    return false;
  }
}

myComparison(x, y); //false
myComparison(x, z); //false
myComparison(z, y); // true

console.log(myComparison(x, y));
console.log(myComparison(x, z));
console.log(myComparison(z, y));

// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

x == y; // false because their types are objects and they reference different objects
x === y; // false because as x==y then they can never be x===y
z === y; // true, because they reference the same objects
z == x; // false, because they reference different objects

function myComparison(a, b) {
  if (a == b) {
    return true;
  } else if (a === b) {
    return true;
  } else {
    return false;
  }
}

myComparison(x, y); //false
myComparison(x, z); //false
myComparison(z, y); // true

console.log(myComparison(x, y));
console.log(myComparison(x, z));
console.log(myComparison(z, y));