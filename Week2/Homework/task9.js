// TASK-9

// 9. If x equals 7, and the only other statement is x = x % 3, 
// what would be the new value of x?
// 9.1 Add at least 3 console.log statements in which you show 
// that you understand what % does.

let x = 7;
console.log("x is 7. x: " + x);

x = x % 3;
console.log("if I say \"x = x % 3\", 7 is divided 3 and new x becomes the division remainder which is 1.");
console.log("new x: " + x);

let y = 8;
console.log("y is: " + y);

console.log("both 8 % 2 and 8 % 4 is 0");
y %= 2;
console.log("y % 2 = " + y);
y %= 4;
console.log("y % 4 = " + y);