// 10. Write a program to answer the following questions:
// 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
const myArray = ['number', 3];
console.log(myArray); // [ 'number', 3 ]

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
// 10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
const inf1 = 6 / 0;
console.log(inf1); // Infinity
const inf2 = 10 / 0;
console.log(inf2); // Infinity

if (inf1 === inf2) {
  console.log('EXACTLY THE SAME');
} else {
  console.log('THEY ARE NOT EXACTYLE THE SAME');
} // EXACTYLE THE SAME
