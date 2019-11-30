'use strict'
let names=['Nur','gul','tur','yuri'];
let numbers=[1,2,3,4,5,6,7];

console.log('The length of the array is ' + names.length);
// console.log(names.length);
console.log('The length of the array is ' + numbers.length);
// console.log(numbers.length);

let compare = names.length === numbers.length;
console.log(compare);


if (names.length === numbers.length) {
    console.log('They are the same!');
} else {
    console.log('Two different sizes');
}
