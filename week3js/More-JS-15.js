
//15 Write some code to test two arrays for equality using == and ===. Test the following:
/* let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
*/
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x==y);
console.log(x===y);
console.log(z==y); // true
console.log(z===x);
