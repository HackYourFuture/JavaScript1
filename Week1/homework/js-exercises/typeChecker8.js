"use strict";
// Declare all variables 2 strings and 2 objects
let strOne = "I m one";
let strTwo = "I m two!";
let objOne = {module: "HtmlCSSGit", number: 1};
let objTwo = {module: "JavaScript", number: 2};


// Check data type
console.log(typeof(strOne));
console.log(typeof(objOne));


// Check if data type is the same
if (typeof strOne == typeof strTwo) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}

if (typeof objOne == typeof objTwo) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}

if (typeof(strOne) == typeof(objOne)) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}

if (typeof(strTwo) == typeof(objTwo)) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}