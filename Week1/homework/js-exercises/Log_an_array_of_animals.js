"use strict";

let items=[];
console.log("what you think the value of the array is ");
console.log(items);
let favoriteAnimals=["cat","dog","rabbit"];

let i;

for(i=0;i<favoriteAnimals.length;i++)
{
    console.log(favoriteAnimals[i]);
}
favoriteAnimals[i]="Piglet";

for(i=0;i<favoriteAnimals.length;i++)
{
    console.log("the new array   "+favoriteAnimals[i]);
}