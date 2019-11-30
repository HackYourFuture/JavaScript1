'use strict'

const food = ['zatter', 'tabouleh', 33, true]
const name = [ 'breakfast', 'lunch', 'me', 19, 25, false, 'drink']

console.log(food.length);
console.log(name.length);

if (food.length === name.length){
    console.log('They are the same!');
}else {
    console.log('Two different sizes');
}