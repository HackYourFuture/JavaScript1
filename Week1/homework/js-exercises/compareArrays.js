'use strict'
const array = ["hello", 123, true, { name: "Noer" }];
const array2 = ["hello", 123, true, { name: "Noer" },"Ceylan","Baysal","Aydın"];
console.log('The length of the first array is ' + array.length);
console.log('The length of the second array is ' + array2.length);
array.length==array2.length ? console.log("They are the same!") : console.log("Two different sizes")