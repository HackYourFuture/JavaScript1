'use strict';


var namesStartWithJ = ["jack", "Jill", "Joe"];
var namesDontStartWithJ = ["Bill", "Dave", "Hani", "Lady McBabe","Lola", "Sami", "Potato Head"];

console.log('Wow the length of the first array is ' + namesStartWithJ.length);
console.log('However the length of the second array is ' + namesDontStartWithJ.length);


if (namesDontStartWithJ.length === namesStartWithJ) {
    console.log("They are the same!");
} else { console.log("Two different sizes");
}
