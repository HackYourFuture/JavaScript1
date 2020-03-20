'use strict'
let a = 'hello world';
let b = ' hello world again';
let x = {
    number: 30
};
let y = {
    number: 50,
};

console.log(typeof x === typeof y);

if (typeof x === typeof y) {
    console.log('SAME TYPE');
} else {
    console.log('not same type');
}
console.log(typeof x === typeof a);

if (typeof x === typeof a) {
    console.log('SAME TYPE');
} else {
    console.log('not same type');
}
console.log(typeof x === typeof b);

if (typeof x === typeof b) {
    console.log('SAME TYPE');
} else {
    console.log('not same type');
}
console.log(typeof a === typeof y);

if (typeof a === typeof y) {
    console.log('SAME TYPE');
} else {
    console.log('not same type');
}
console.log(typeof b === typeof y);

if (typeof b === typeof y) {
    console.log('SAME TYPE');
} else {
    console.log('not same type');
}

console.log(typeof a === typeof b);
if (typeof a === typeof b) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...')
}

console.log(typeof a + typeof b === typeof x + typeof y);
if (typeof a + typeof b === typeof x + typeof y) {
    console.log('same type')

} else {
    console.log('Not the same...')
}