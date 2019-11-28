//Exercise 10

'use strict';

const array1 = ["hey", 1, true, {name: "Hanbing"}];
const array2 = ["hello", 2, 101, false, {color: "lightblue"}, true, "lastone"];

console.log('The length of the first array is ...' + array1.length);
console.log('The length of the second array is ...' + array2.length);

if(array1.length == array2.length){
    console.log("They are the same!")
}else{
    console.log("Two different sizes")
}