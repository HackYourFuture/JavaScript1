'use strict';
//declare 2 array variable
const schoolItems = ['books', 'pens', 'notebook', 'tablet'];
const studentsInfo = [
  { name: 'ahmed' },
  { age: 13 },
  { grad: 'A' },
  { height: 120 },
  { weight: 30 },
  { country: 'palestine' },
  { telehone: '06000000' },
];
//print arrays length
console.log(`school items array length is ${schoolItems.length}`);
console.log(`student array length is ${studentsInfo.length}`);
//compare array length and print the condition
if (schoolItems.length === studentsInfo.length) {
  console.log('They are the same!');
} else {
  console.log('Two different sizes');
}
