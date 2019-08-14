{
  let x = [1, 2, 3];
  let y = [1, 2, 3];
  let z = y;

  console.log(x == y); // log false ** MDN "Two distinct objects are never equal for either strict or abstract comparisons."
  console.log(x === y); // log false
  console.log(z == y); // log true ** MDN "An expression comparing Objects is only true if the operands reference the same Object."
  console.log(z == x); // log false
}
