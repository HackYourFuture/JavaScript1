{
  /* Create a function that takes 3 arguments 
  and returns the sum of the these arguments. */

  function sum(a, b, c) {
    return a + b + c;
  }
  console.log(sum(10, 3, 4));

  /* Create a function that takes unlimited arguments 
  and returns the sum of the these arguments. */

  function anotherSum() {
    let d = 0;
    for (let i = 0; i < arguments.length; i++) {
      d += arguments[i];
    }
    return d;
  }
  console.log(anotherSum(10, 3, 4, 10, -4));
}
