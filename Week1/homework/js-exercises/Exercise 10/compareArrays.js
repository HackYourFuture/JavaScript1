'use strict'
const myArray = ['naji', 'nabulsi', 46, { 'Married': true }];
const myIteams = ['laptop', 'shoes', 'book', 'Ben', 'Story', 'bag', 'glasses'];
console.log('The length of the array is... ' + myArray.length);
console.log('The length of the array is... ' + myIteams.length);
if (myArray.length == myIteams.length) {
    console.log('They are the same!')
} else {
    console.log("Two different sizes!");
}