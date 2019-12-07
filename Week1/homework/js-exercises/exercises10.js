'use strict';
const firstArray = ["good", 26, true, {name: "Amna"}];
const secondArray = ["beter", 38, false, "why?", "Who", "what", {frinds: "Hala"}];

console.log('The length of the first array is ...' + firstArray.length);
console.log('The length of the second array is ...' + secondArray.length);

if(firstArray.length == secondArray.length){
    console.log("They are the same!")
}else{
    console.log("Two different sizes");
};
