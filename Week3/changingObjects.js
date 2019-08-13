//16. Take a look at the following code:

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

o2.key = 'changing';

o2; //it would be {foo: 'bar', key: 'changing'}
o3; // it would also be  {foo: 'bar', key: 'changing'}

// changing o1 does not change o3 because they are not == ;

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

//Answer: the assign order matters for the above example if we say const o3=o2; it would give us an error because we hav not defined o2 yet.
