// The == operator for Objects in Javascript only checks to see if the objects are the same actual object reference, not if they are two separate object that contain the same contents.There is no built in operator for checking if they contain the same contents.You would have to write a function to do that sort of comparison yourself.

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

function wrongEqualityTest(a, b) {
  console.log(a == b);
  console.log(a === b);
}

equalityTest(x, y); //false
equalityTest(z, y); //true
equalityTest(z, x); //false

/////////////////////////////////////////

function correctEqualityTest(a, b) {
  if (a.length === b.length) {
    for (i = 0; i < a.length; i++) {
      if (a.sort()[i] === b.sort()[i]) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

correctEqualityTest(x, y); //true