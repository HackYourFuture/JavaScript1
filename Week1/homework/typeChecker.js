/*
Declare 4 variables: 2 must be strings and 2 must be objects
Create 6 conditional statements, where for each you check if the data type of one variable is the same as the other
Find out how to check the type of a variable
Write 2 console.log statements to log the type of 2 variables, each with a different data type
Now compare the types of your different variables with one another
Log Not the same... when the types are different
*/

"use strict";


let string1 = 'Batman Darknight';//String
let string2 = 'Never Give U';//String
let object1 = {type:'Fiat', model:'500', color:'white'};//Object
let object2 = {firstName:'Abdulkadir', lastName:'B', age:32, eyeColor:'Brown'};//Object


if (typeof string1 === typeof string2) {
    console.log('SAME TYPE');
}
else {
    console.log('NOT THE SAME TYPE');
}

if (typeof string1 === typeof object1) {
    console.log('SAME TYPE');
}
else {
    console.log('NOT THE SAME TYPE');
}

if (typeof string1 === typeof object2) {
    console.log('SAME TYPE');
}
else {
    console.log('NOT THE SAME TYPE');
}

if (typeof string2 === typeof object1) {
    console.log('SAME TYPE');
}
else {
    console.log('NOT THE SAME TYPE');
}

if (typeof string2 === typeof object2) {
    console.log('SAME TYPE');
}
else {
    console.log('NOT THE SAME TYPE');
}

if (typeof object1 === typeof object2) {
    console.log('SAME TYPE');
}
else {
    console.log('NOT THE SAME TYPE');
}