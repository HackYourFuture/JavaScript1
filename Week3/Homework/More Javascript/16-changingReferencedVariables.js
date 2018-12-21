let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(o2); // { foo: 'bar' }

o2 = { abc: "123" };
console.log(o2); // { abc: '123' }

// The order that we assign(o3 = o2 or o2 = o3) matters!