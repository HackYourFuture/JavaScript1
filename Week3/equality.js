
console.log(`------- 15 -------`);

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

/* What do you think will happen with x == y, x === y and z == y and z == x? Prove it! */

console.log(`I think the value of 'x == y ' is false because arrays -which are complex data types- can be equal only if they have the same memory reference.`);
console.log(`The actual value of 'x == y' is ${x == y} `);
console.log(`\n`);

console.log(`I think the value of 'x === y ' is false again because even if their values are the same, they are not pointing to the same location in memory.`);
console.log(`The actual value of 'x === y' is ${x === y} `);
console.log(`\n`);

console.log(`I think the value of 'z == y ' is true because they are referencing the same location in memory.`);
console.log(`The actual value of 'z == y' is ${z == y} `);
console.log(`\n`);

console.log(`I think the value of 'z == x ' is false because they don't point the same memory location.`);
console.log(`The actual value of 'z == x' is ${z == x} `);
console.log(`\n`);
