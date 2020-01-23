"use strict";

const array1 = ["hello", 123, true, { name: "Rasho" }];

const array2 = ["hello", 123, false, { firstName: "Muhammed" },{lastName:"Rasho"},{age:30},{adres:"Eindhoven"}];

console.log("The length of the 1st array is : "+array1.length);
console.log("The length of the 1scd array is :"+array2.length);

if (array1.length==array2.length)

{
 console.log("They are the same!");
}
else
{
    console.log("Two different sizes")
}