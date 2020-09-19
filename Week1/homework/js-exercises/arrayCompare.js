'use strict';

// Exercise 10: Compare arrays

//declare and initialize an array that contain my favorite foods
const myFavCities = ['Amsterdam', 'Addis Abeba', 'Paris', 'Barcelona']; 
const myFavFoods = [{Italian: 'spagheti'}, 'rice', {Ethiopian: 'enjera with Dorowet'}, 'salad', 'fish', 'roasted beef', 'couscus']; 
//length of the arrays
let len = myFavCities.length;
let lenFoods = myFavFoods.length;
//print out the length's of the arrays
console.log('The length of the firsta array is '+ len);
console.log('The length of the second array is '+ lenFoods);
//compare the length of the array
if (len==lenFoods){
    console.log('They are the same!');
}
else{
    console.log('Two different sizes');
}
