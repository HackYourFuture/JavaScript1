let mixArray = [
  [1, 2, 3],
  ["one", "two", "three", "four"],
  "I am just a string",
  0.223434,
  false,
  {
    "fistname": "John",
    "lastname": "Doe",
    "age": 40
  }
];

console.log(mixArray);

console.log((6 / 0 === 10 / 0)); //true
console.log(typeof (6 / 0)); //still number
console.log(6 / 0); //Infinity
console.log(1 / Infinity); //Zero
console.log(Math.round(Infinity)); // Still Infinity :)