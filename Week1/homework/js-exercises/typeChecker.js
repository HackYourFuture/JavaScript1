'use strict';

let string1 = 'Netherlands';
let string2 = 'Turkey';
let object1 = {
    language: 'Dutch',
    capital: 'Amsterdam',
};
let object2 = {
    language: 'Turkish',
    capital: 'Ankara'
};
if (typeof string1 === typeof string2) {
    console.log('Same type!');
}
else {
    console.log('not the same type!');
}
if (typeof string1 === typeof object1) {
    console.log('Same type!');
}
else {
    console.log('not the same type!');
}
if (typeof string1 === typeof object2) {
    console.log('Same type!');
}
else {
    console.log('not the same type!');
}
if (typeof string2 === typeof object1) {
    console.log('Same type!');
}
else {
    console.log('not the same type!');
}
if (typeof string2 === typeof object2) {
    console.log('Same type!');
}
else {
    console.log('not the same type!');
}
if (typeof object2 === typeof object1) {
    console.log('Same type!');
}
else {
    console.log('not the same type!');
}
