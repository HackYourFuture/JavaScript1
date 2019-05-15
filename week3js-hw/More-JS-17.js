
//17 What does the following code return? (And why?)
/*
let bar = 42;
typeof typeof bar;
‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.
*/
let bar = 42;
typeof typeof bar;
console.log(typeof bar); // number
console.log(typeof typeof bar); // type of number is string

