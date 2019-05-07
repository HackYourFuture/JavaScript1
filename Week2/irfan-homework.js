// Question 1

console.log("Hello World!");
console.log("Merhaba Dünya!");
console.log("Hola mundo!");

// Question 2
console.log('I\'m awesome');

// Question 3
let x
console.log("the value of my variable x will be: undefined");
console.log(x)

x = 22;
console.log("the value of my variable x will be: 22")
console.log(x);

// Question 4
let y = "someJavascript";
console.log("the value of my string will be: someJavascript");
console.log(y);

y = "anotherJavascript";
console.log("the value of my string will be: anotherJavascript");
console.log(y);



// Question 5
console.log(Math.round(7.25));
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);

let h = Math.max(a,z);
console.log(h);


// Question 6
let arrays = [];
console.log("the value of my array will be: empty");
console.log(arrays);

let animalsArray = ["Elephant","Tiger","Deer","Lion","Crocodile"];
console.log(animalsArray);
animalsArray.push("Baby Pig");
console.log(animalsArray);


// Question 7
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

// Question 8
let firstVariable = "First Variable";
let secondVariable = 23;
let thirdVariable = [];
let fourthVariable = true;

console.log("The value of my firstVariable is: " + firstVariable);
console.log("The value of my secondVariable is: " + secondVariable);
console.log("The value of my thirdVariable is: " + thirdVariable);
console.log("The value of my fourthVariable is: " + fourthVariable);


function checkType(variable1,variable2) {
    if(typeof variable1 == typeof variable2) {
        return "SAME TYPE";
    } else {
        return "DIFFERENT TYPE";
    }
}

console.log(checkType(firstVariable,secondVariable));

// 9th Question

let b = 7;
b = b % 3;
console.log(b);
console.log("% operator first divides number to the next number")
console.log("Then it results the remaining number from the division process");
console.log("The remaining number is assigned to the variable");


//10th Question

let newArray = ["Item1",39,["Item2","Item3"]];
console.log(newArray);

console.log(6/0 === 10/0);






























