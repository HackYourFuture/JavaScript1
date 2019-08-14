console.log(`------- 16 -------`);

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

/* Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

Does the order that you assign (o3 = o2 or o2 = o3) matter? */

o2.foo = `bar changed.`;
console.log(`I think changing o2 also changes o3 as they have the same memory reference which also makes them equal.`);
console.log(`After the change -> o2.foo is '${o2.foo}' and o3.foo is '${o3.foo}'`);
console.log(`\n`);

o1.foo = `change of bar`;
console.log(`I think changing o1 has no effect on o3 since they have no relation like pointing to same location in memory.`);
console.log(`After the change -> o1.foo is '${o1.foo}' and o3.foo is '${o3.foo}'`);
console.log(`\n`);

console.log(`the order we assign (o3 = o2 or o2 = o3) matters because left-hand-side is the variable whereas the right-hand-side is value.`);
console.log(`\n`);


