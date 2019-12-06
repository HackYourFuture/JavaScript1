'use strict'

let numbers=[...Array(21).keys()];

for (let i=0; i<numbers.length; i++) {
    if (i % 2 == 0) {
        console.log(`The number ${i} is even`)
    } else {
        console.log (`The number ${i} is odd`)
    }
};


