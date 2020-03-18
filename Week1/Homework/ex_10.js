//Exercise 10: Compare arrays
let arr1 = ['Hello', 123, true, { name: 'Saif' }];
let arr2 = [87, false, 'Alamrani', undefined, null, { name: 'Vahid' }, 'love'];
console.log(arr1.length);
console.log(arr2.length);

if (arr1.length === arr2.length) {
  console.log('They are the same!');
} else {
  console.log('Two different sizes');
}
