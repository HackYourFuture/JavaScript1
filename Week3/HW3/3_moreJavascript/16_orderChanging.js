let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2.foo = "column"

o2;
{foo: "column"}

o3;
// prints: {foo: "column"} 
// change in o2 make changes in o3

o1.foo = "circle";

o3;
// prints: {foo: "column"} 
// change in o1 did not make changes in o3. Since there is no direct equality between o1 and o3

// to change o3 = o2 to o2 = o3 does not make any difference