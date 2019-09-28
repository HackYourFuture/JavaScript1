// Exercise 10: Compare arrays

'use strict';
{

const array1 = ['a','b','c','d'];
const array2 = [1,2,3,4,5,6,7];

//shows the length of each array
console.log('The length of array1 is : ' + array1.length);
console.log('The length of array2 is : ' + array2.length);

//compare arrays
if (array1.length === array2.length){
    console.log('They are the same!');
} else{
    console.log('Two different sizes');
}
}