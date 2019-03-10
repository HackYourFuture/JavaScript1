//Q1

const Turkish = 'Merhaba Dunya',
  English = 'Hello, World',
  French = 'Bonjour, le Monde',
  Dutch = 'Hoi, de wereld';
console.log(Turkish, English, French, Dutch);

//Q2
console.log('I'm awesome'); 
//here quoting is problem. Two solutions: using double quote/backsticks or escape element. So;
console.log('I\'m awesome');
console.log("I'm awesome");

//Q3
let x;
console.log("the value of x will be : undefined");
console.log(x);
x = 7;
console.log("the value of x will be : 7");
console.log(x);

//Q4
const y = "I like birds";
console.log("the value of y will be : I like birds");
console.log(y);
y = "I hate birds";
console.log("the value of y will be : error because I have used const as a variable. The case will be different if I had used var or let. While debugging it does not throw an error message I don't know why.");
console.log(y);

//Q5 (There are two solutions possible. Either using if/else or Math.round() method)
//Method1
let z = 7.25;
console.log(z);
let a = z - 0.5;
if (a<7) {
  a=7
}
else {
  a=8
};
console.log(a);

//Method2
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);

//The rest is same;
if (z - a > 0) {
  console.log(z)
}
else {
  console.log(a)
}

//Q6

const emptyArrOfAnimals = [];
console.log("emptyArrOfAnimals : empty array");
console.log(emptyArrOfAnimals);

const myFavouriteAnimals = ["Budgie Parrots", "German Shephard", "Goat"];
console.log(myFavouriteAnimals);
myFavouriteAnimals[3] = "baby pig"; //myFavouriteAnimals.push("baby pig") method can also be used
console.log(myFavouriteAnimals);

//Q7

let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//Q8 

let firstVar = 112;
let secondVar = "ball";
let thirdVar = true;
let fourthVar = "112";

console.log(firstVar, secondVar, thirdVar, fourthVar);
console.log("typeof firstVar:number; typeof secondVar: string; typeof thirdVar: booelan; typeof fourthVar: string")

typeof firstVar;
typeof secondVar;
typeof thirdVar;
typeof fourthVar;

typeof firstVar === typeof secondVar;
typeof thirdVar !== typeof fourthVar;
typeof secondVar === typeof fourthVar;

if (typeof firstVar === typeof secondVar) {
  console.log("SAME TYPE")
}
else {
  console.log("DIFFERENT TYPE")
};

if (typeof secondVar === typeof fourthVar) {
  console.log("SAME TYPE")
}
else {
  console.log("DIFFERENT TYPE")
}

//Q9
//9.0 (WHEN I WAS DOING DEBUGGING I SAW THAT I COULD NOT ASSIGN NEW VALUES TO X. BUT I DON'T KNOW WHY.)

let x = 7; 
x = x % 3;
console.log("the result will be 1. This is called modulo. It is used to find what remains from x when it is divided to 3");
console.log(x);
//9.1
x = 150;
x = x % 10;
console.log("the result will be 0.");
console.log(x);

x = 159.9999999;
x = x % 10;
console.log("the result will be 9..9999999");
console.log(x);

x = 23;
x = x % 5;
console.log("the result will be 3");
console.log(x);

//Q10

//10.1 The answer is yes. See the below example:

const mixDataTypes = ["flower", 12, false, ["power", "struggle"], null, [""]];
console.log(mixDataTypes);

//10.2 yes we can compare. Boeleans mixed with if/else give us an answer. At least, my firefox gives true as an answer;

if (6/0 === 10/0){
  console.log("yes, infinites are comparable");
}
else {
  console.log("no, infinites are not comparable")
};
