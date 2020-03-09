'use strict'
let z =7.25;
console.log(z);
let a=Math.round(z);
console.log(a);
// One way
// let highNum;
// if(z>a){
//   highNum =z;
// } else {
//   highNum=a;
// }
// Shorthand
let highNum = z > a ? z: a;
console.log(highNum);