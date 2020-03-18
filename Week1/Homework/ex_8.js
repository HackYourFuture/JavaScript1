//Exercise 8: Type checker//
let x = 'Saif Alamrani';
let y = 'Vahid Hoti';
let p1 = { Name: 'Saif', Age: 32, Gender: 'male' };
let p2 = { Name: 'Vahid', Age: 35, Gender: 'male' };

console.log(x);
console.log(y);
console.log(p1);
console.log(p2);

if (typeof x === typeof y) {
  console.log('same type');
} else {
  console.log('not the same type');
}
if (typeof x === typeof p1) {
  console.log('same type');
} else {
  console.log('not the same type');
}
if (typeof y === typeof x) {
  console.log('same type');
} else {
  console.log('not the same type');
}
if (typeof y === typeof p2) {
  console.log('same type');
} else {
  console.log('not the same type');
}
