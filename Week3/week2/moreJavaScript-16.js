let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(o1);
console.log(o2);
console.log(o3);
console.log("\n");

console.log(o3);
o2.foo = "bar2";
console.log(o3); // Yes it changes
console.log("\n");

console.log(o3);
o1.foo = "barX";
console.log(o3); // No it doesn't change
console.log("\n");

console.log(o1);
console.log(o2);
console.log(o3);
console.log("\n");

o2 = o3;

console.log(o1);
console.log(o2);
console.log(o3);
console.log("\n\n");