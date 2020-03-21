//EXERCISE 10 Compare arrays

/*
Declare 2 variables, that each hold an array. 
The first array should have 4 items, the second 7 items
Write a console.log statement that shows the length of each array
*/
const WILD_ANIMALS = ["tiger", "elephant", "wolf", "zebra"];
console.log('The length of the array is '  + WILD_ANIMALS.length + '.');
const DOMESTIC_ANIMALS = ["dog", "cat", "hen", "horse", "sheep", "cow", "goat"];
console.log('The length of the array is '  + DOMESTIC_ANIMALS.length + '.');


/*
Write a conditional statement that checks if both are of equal length. 
If they are, log to the console They are the same!, if not log Two different sizes
*/

if(WILD_ANIMALS.length === DOMESTIC_ANIMALS.length){
	console.log('They are the same!');
}

 else {
 		console.log('Two different sizes!');
 }