'use strict';
let myName = 'Ali';

let myLastName = 'Amouri Kadhim';

const cities = ['Utrecht', 'Amsterdam', 'Rotterdam', 'DanHaag'];

const languages = ['Arabic', 'English', 'Dutch'];


console.log(typeof myName);
console.log(typeof myLastName);
console.log(typeof cities);
console.log(typeof languages);

if (typeof myName == typeof cities) {
    console.log('SAME TYPE');
} else {
    console.log('NOT THE SAME');
}
if (typeof myLastName == typeof myName) {
    console.log('SAME TYPE');
} else {
    console.log('NOT THE SAME');
}
if (typeof languages == typeof myLastName) {
    console.log('SAME TYPE');
} else {
    console.log('NOT THE SAME');
}
if (typeof cities == typeof languages) {
    console.log('SAME TYPE');
} else {
    console.log('NOT THE SAME');
}