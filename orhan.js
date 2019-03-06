//1. Part of Homework

console.log('Merhaba, Dunya!\nHello, World!\nHallo, Wereld!');

//2. Part of Homework

console.log('I\'m awesome');
//this also works console.log("I'm awesome");

//3. Part of Homework

let x;
console.log('the value of my variable x will be: undefined');
console.log(x);
x = 10;
console.log('the value of my variable x will be: 10');
console.log(x);

//4. Part of Homework

let y = 'hello';
console.log('the value of my variable y will be: hello');
console.log(y);
y = 'hi';
console.log('the value of my variable y will be: hi');
console.log(y);

//5. Part of Homework

let z = 7.25;
console.log('the value of z is: ' + z);
let a = Math.round(z);
console.log('the value of a is: ' + a);
let highestValue = a < z ? z : a;
console.log('the highest value is: ' + highestValue);

//6. Part of Homework

let favoriteAnimals = [];
console.log('the value of the array will be: []');
console.log(favoriteAnimals);
favoriteAnimals = ['bird', 'cat'];
console.log(favoriteAnimals);
favoriteAnimals[2] = 'baby pig';
console.log(favoriteAnimals);

//7. Part of Homework

let testString = 'this is a test';
console.log(testString);
let stringLength = testString.length;
console.log(stringLength);

//8. Part of Homework

let myNumber = 28;
let myString = 'sea'
let myBoolean = true;
let myArray = [1, 2, 3, 4, 5];
console.log('the value of variable myNumber is: ' + myNumber);
console.log('the value of variable myString is: ' + myString);
console.log('the value of variable myBoolean is: ' + myBoolean);
console.log('the value of variable myArray is: ' + myArray);
console.log('the type of myNumber will be number, myString will be string,\
  myBoolean will be boolean, myArray will be object'
);
console.log(typeof myNumber, typeof myString, typeof myBoolean, typeof myArray);

if (typeof myNumber !== typeof myString) {
  console.log('the variables myNumber and myString do not have same type');
}
if (typeof myBoolean !== typeof myArray) {
  console.log('the variables myBoolean and myArray do not have same type');
}

//9. Part of Homework

let n = 7;
n = n % 3;
console.log('the value of n will be 1');
console.log(n);

let m = 19;
m = m % 5;
console.log('the value of m will be 4');
console.log(m);

let p = 37;
p = p % 13;
console.log('the value of p will be 11');
console.log(p);

//10. Part of Homework

let mixArray = [1, 'str'];
console.log('the elements of mixArray are ' + mixArray);

let q = 6 / 0;
let r = 10 / 0;
console.log('the value of q=6/0 is: ' + q);
console.log('the value of r=10/0 is: ' + r);
console.log('are q and r equal? ' + (q === r));