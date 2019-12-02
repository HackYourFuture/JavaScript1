//Create a for loop, that iterates from 0 to 20//[i] is [21] start from 0
for (i = 0; i <= 20; i++) {
  //Create a conditional statement that checks if the value of the counter variable is odd or even
  if (i % 2 === 0) {
    console.log(`The number ${i} is even`);
  } else console.log(`The number ${i} is odd`);
}
console.log([i]);
//same code
for (i = 0; i <= 20; i++) {
  i % 2 === 0
    ? console.log(`The number ${i} is even`)
    : console.log(`The number ${i} is odd`);
}
