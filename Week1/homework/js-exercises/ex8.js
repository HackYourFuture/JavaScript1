//Exercise 8: Type checker
// Declare all variables
let first = '';
let second = '';
let third = [,];
let forth = [,];

//Create 6 conditional statements
typeof first === typeof second; //true
typeof first !== typeof second; //false
typeof first === typeof third; //false
typeof first !== typeof third; //true
typeof first === typeof forth; //false
typeof first !== typeof forth; //true

// Check data type
console.log(typeof first);
console.log(typeof third);

// Check if data type is the same
if (typeof first === typeof third) {
  console.log('SAME TYPE');
} else {
  console.log('not the same');
}
