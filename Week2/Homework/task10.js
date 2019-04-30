// TASK-10

// 10. Write a program to answer the following questions:
// 10.1 Can you store multiple types in an array? Numbers
// and strings? Make an example that illustrates your answer.
// 10.2 Can you compare infinities? (Not in Eyad's world)
// - does 6/0 === 10/0? How can you test this?
// 10.3 Add console.log statements to the above program 
// in which you show that you understand the concepts (just 
// like you've done in the above assignments).

let multipleTypedArray = [0, "string", "000", true];
console.log("the type of my array is: " + typeof multipleTypedArray);
console.log("the type of the first element of my array is: " + typeof multipleTypedArray[0]);
console.log("the type of the second element of my array is: " + typeof multipleTypedArray[1]);
console.log("the type of the third element of my array is: " + typeof multipleTypedArray[2]);
console.log("the type of the fourth element of my array is: " + typeof multipleTypedArray[3]);

let m = 6 / 0;
let n = 10 / 0;
console.log("6/0 = " + m, "\n10/0 = " + n);

if (m === n) {
    console.log("6/0 = 10/0");
} else {
    console.log("An error occured!");
}
