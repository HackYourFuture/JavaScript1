// TASK 5

/*
5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
5.1 Declare a variable z and assign the number 7.25 to it.
5.2 console.log z.
5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
5.4 console.log a.
5.5 So now we have z and a find a way to compare the two values and store the 
highest of the two in a new variable.
5.6 console.log the highest value.
*/

let z = 7.25;
console.log(z);

let a = Math.round(z);
console.log(a);

let highestValue = Math.max(a, z);
console.log(highestValue);
