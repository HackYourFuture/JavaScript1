//declare 2 variables

//first array
const array1 = ["hi", 57, false, { fName: "ismaiel", lName: "alnabwani" }];

//second array
const array2 = [
  "7",
  7,
  true,
  { color: "white", length: 1.76 },
  ,
  { male: true, adult: false },
  "I can do it",
];

// find the array length
console.log("the length of the array array1 is: " + array1.length);
console.log("the length of the array array2 is: " + array2.length);

//check if the lenth same

if (array2.length === array1.length) {
  console.log("They are the same!");
} else {
  console.log("Two different sizes");
}
