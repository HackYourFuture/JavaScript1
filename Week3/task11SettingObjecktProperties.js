let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(`o2 now has: ${Object.keys(o2)}`);

o2.animal = `dog`;
console.log(`o2 was changed and o3 now has: ${Object.keys(o3)}`);

o1.vehicle = `car`;
console.log(`o1 was changed and o3 now has: ${Object.keys(o3)}`);

console.log(`now in the other order`);

o1 = { foo: "bar" };
o2 = { foo: "bar" };
o3 = {};
o2 = o3;

console.log(`o3 is epmty object now so o2 now has: ${Object.keys(o2)}`);

o2.animal = `dog`;
console.log(`o2 was changed and o3 now has: ${Object.keys(o3)}`);

o1.vehicle = `car`;
console.log(`o1 was changed and o3 now has: ${Object.keys(o3)}`);