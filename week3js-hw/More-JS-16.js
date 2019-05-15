
//16 
/* Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
Does the order that you assign (o3 = o2 or o2 = o3) matter?
*/
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
// didn't work so far