'use script';

{
  const myArr1 = ['n', 'u', 'r', 'i'];
  const myArr2 = [' ', 'b', 'a', 'y', 'r', 'a', 'm'];


  // let x = console.log(myArr1.length);
  // let y = console.log(myArr2.length);
  /* I gave x and ye variables to print value.
     But I had to give it to string lengths.*/


  const x = myArr1.length;
  console.log(x);
  const y = myArr2.length;
  console.log(y);


  /*if ((x = y)) { } I used two extra braces here.
  You don't need strict equality since both array length values are numbers in turns.
  But I have to get used to strict equality.*/
  if (x === y) {
    console.log('They are the same!');
  } else {
    console.log('Two different sizes');
  }
}
