'use strict';

//Exercise 8: Type checker

const str1 = 'aaa';
const str2 = 'bbb';
const obj1 = ['ccc', 'ddd'];
const obj2 = ['eee', 'fff'];
if (typeof str1 == typeof str2) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME...');
}

if (typeof str1 == typeof obj1) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME...');
}

if (typeof str1 == typeof obj2) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME...');
}

if (typeof str2 == typeof obj1) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME...');
}

if (typeof str2 == typeof obj2) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME...');
}
if (typeof str2 == typeof str1) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME...');
}