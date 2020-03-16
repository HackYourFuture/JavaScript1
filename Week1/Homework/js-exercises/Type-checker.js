'use-strict';

var string1 = 'welcome home';
var string2 = 'welcome back';
var obj1 = { name: 'hello' };
var obj2 = { name: 'hallo' };

console.log(typeof string1);
console.log(typeof obj1);

if (typeof string1 === typeof string2) {
    console.log('the same type');
} else if (typeof string1 === typeof obj1) {
    console.log('not the same type');
} else if (typeof string1 === typeof obj2) {
    console.log('not the same type');
} else if (typeof obj1 === typeof string1) {
    console.log('not the same type');
} else if (typeof obj1 === typeof string2) {
    console.log('not the same type');
} else if (typeof obj1 === typeof obj2) {
    console.log('the same type');
}