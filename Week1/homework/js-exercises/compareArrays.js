'use strict';

const array1 = ['Sena', 7, false, {age:7}];
const array2 = ['Rana', 'Sena', 3, 7, true, false, 'Nisa'];

console.log(array1.length);
console.log(array2.length);

if (array1 === array2) {
    console.log('They are the same!');
}
else {
    console.log('Two different sizes'); 
}