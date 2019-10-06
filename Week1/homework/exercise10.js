"use strict"

const items1 = ["Menu", 123, {feeling: "hungry"}, "Let's eat something!"];
const items2 = [45, 78, true, false, {food: "bring me food"}, 65, true];
console.log ('The first array has the lenght of ' + items1.length);
console.log ('The second array has the lenght of ' + items2.length);

if (items1.length === items2.length)
{
    console.log("The arrays have the same length!")
}   else {
    console.log("The arrays don't have the same length!")
}