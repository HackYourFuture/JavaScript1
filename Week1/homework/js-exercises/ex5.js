//Exercise 5: Round a number and log it
//Declare variable z and assign the number 7.25 to it
const z = 7.25;
//log the value of z
console.log(z);
//Declare variable a and assign z.round value
const a = Math.round(z);
//log the value of a
console.log(a);
//compare the two values and store the highest of the two in a new variable
if (a > z) {
  let x = a;
} else {
  let x = z;
  console.log(x);
}
console.log;
function compare(a, z) {
  if (a > z) {
    return a;
  } else {
    return z;
  }
}
console.log(`this this the highest ${compare(a, z)}`);

//use Math
const compareMath = Math.max(a, z);
console.log(`this this the highest ${compareMath}`);
