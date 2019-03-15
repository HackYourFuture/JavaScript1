console.log(`More JavaScript`);
console.log(`
Task 16 `); // to observe the difference between a = b and b = a.

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o2 = { animal: 'cat' };

console.log(o3);
console.log('no');

o1 = { animal: 'dog' };
console.log(o3);
console.log('no');

console.log('we can not write o2 = o3, since we already define o2 and we did not define o3 yet');

