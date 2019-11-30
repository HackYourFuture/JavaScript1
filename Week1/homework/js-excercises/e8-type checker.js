
'use strict'

let string1='string1';
let string2='string2';
let object1={position: 'student'};
let object2={available: true};


console.log(typeof string1==typeof string2)
console.log(typeof string1==typeof object1)
console.log(typeof string1==typeof object2)
console.log(typeof string2==typeof string1)
console.log(typeof string2==typeof object1)
console.log(typeof string2==typeof object2)



console.log(typeof string1 && typeof string2)
console.log(typeof object1 && typeof object2)

if (typeof string1 == typeof object1){
    return console.log('Same type')
} else{
    return console.log('Different type')
}


