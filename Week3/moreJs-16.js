let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
o1.foo2 = 'pub';
console.log(o3); //o1 doesnt change o3
console.log(o1); // {foo: "bar", foo2: "pub"} o1 only changes itself

o3.foo2 = 'car';
console.log(o2); //{foo: "bar", foo2: "car"} , o3 changes o2

delete o2.foo2;
console.log(o3); //{foo: "bar"} , o2 changes o3

//we understand in the example above that
// order (o3 = o2 or o2 = o3) doesnt matter.

