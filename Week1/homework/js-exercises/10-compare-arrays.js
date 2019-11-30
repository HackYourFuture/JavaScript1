'use strict';

//Exercise 10: Compare arrays


const array1 = ['aaa', '333', false, { color: "blue" }];
const array2 = ['up', 'down', 'right', 'left', 'forward', 'behind', 'middle'];
console.log('the length of array1 is '+ array1.length);
console.log('the length of array1 is '+ array2.length);
if (array1.length == array2.length) {
    console.log('They are the same!')
} else {
    console.log("Two different sizes!");
}