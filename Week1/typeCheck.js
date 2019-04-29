let myBoolean = false;
console.log("The value of my variable myBoolean is: " + myBoolean);
console.log("The type of the variable is boolean");
console.log(typeof myBoolean);
let myText = "hello";
console.log("The value of my variable myText is: " + myText);
console.log("The type of the variable is string");
console.log(typeof myText);
let myNumber = 24;
console.log("The value of my variable myNumber is: " + myNumber);
console.log("The type of the variable is number");
console.log(typeof myNumber);
let myArray = ['apple','orange'];
console.log("The value of my variable myArray is: " + myArray);
console.log("The type of the variable is object");
console.log(typeof myArray);
if (typeof myArray == typeof myBoolean) {
    console.log('SAME TYPE');
}
else {
    console.log('DIFFERENT TYPE')
};

if (typeof myText == typeof myArray) {
    console.log('SAME TYPE');
}
else {
    console.log('DIFFERENT TYPE')
};

if (typeof myNumber == typeof myText) {
    console.log('SAME TYPE');
}
else {
    console.log('DIFFERENT TYPE')
};

if (typeof myNumber == typeof myBoolean) {
    console.log('SAME TYPE');
}
else {
    console.log('DIFFERENT TYPE')
};

