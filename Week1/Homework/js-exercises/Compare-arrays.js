'use-strict';

var array1 = [1, true, false, 41];
var array2 = ['hello', 88, 3.14, 'number2', 121, 'num', true];
console.log(array1.length);
console.log(array2.length);

if (array1.length === array2.length) {
    console.log('they are the same!');
} else {
    console.log('they are different!');
}