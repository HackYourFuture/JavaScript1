/* 10. Write a program to answer the following questions:
10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).*/

let multipleTypesArray = ['class', 21 , true];
console.log(typeof(multipleTypesArray[0]));
console.log(typeof(multipleTypesArray[1]));
console.log(typeof(multipleTypesArray[2]));

//10.2
let x1 = 6/0;
let y1 = 10/0;
x1 === y1? console.log('Yes') : console.log('No');
