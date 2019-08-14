{
  /* Show that changing o2 changes o3 (or not) 
  and changing o1 changes o3(or not).

  Does the order that you assign (o3 = o2 or o2 = o3) matter? */
  let o1 = { foo: 'bar' };
  let o2 = { foo: 'bar' };
  let o3 = o2;

  // changing o2 changes o3 (or not):
  // apply change to o2:
  o2.foo = 'bar1, bar2';
  console.log(o2); // will log: {foo: "bar1, bar2"}
  // check equality:
  console.log(o3 === o2); // will log: ture (Coz the operands reference the same Object)

  //
  // changing o1 changes o3 (or not):
  // apply change to o1:
  o1.foo = 'barOne, barTwe';
  console.log(o1); // will log: {foo: "barOne, barTwe"}
  console.log(o1 === o3); // will log: false. (Two distinct objects are never equal for either strict or abstract comparisons.)

  /* Does the order that you assign (o3 = o2 or o2 = o3) matter?
   ** Yes it matters becouze we can't access 'o3' before initialization of o2. */
}
