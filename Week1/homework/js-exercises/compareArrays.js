"use strict";

//Declare two arrays
let myArray1 = ["firstItem", 2, true, {fourth: 4}];
let myArray2 = ["Abed Alrahman", "Hettini", 15, "June", 1988, true, {courseName: "javascript1", courseNumber: 1}];

//Log the length of each array
console.log(myArray1.length);
console.log(myArray2.length);

//Compare the arrays sizes
if (myArray1.length == myArray2.length) {
    console.log("They are the same!");
}
else {
    console.log("Two different sizes");
}