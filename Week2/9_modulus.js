let x = 7;
x = x % 3; // set new value of modulus
console.log(x);

let num = Math.round(Math.random() * 100); //pick a number between 0 and 100
console.log((num % 2 == 0) ? `${num} is Even` : `${num} is Odd`);