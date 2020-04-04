'use strict'
let cartForParty = {
        chips: 1.99,
        cola: 1.45,
        youghurt: 0.99,
        mint: 0.99,
        pizza: 2.99
    }
    // function to calculate the values
function calculateTotalPrice(obj) {
    let sum = 0;
    for (let value of Object.values(obj)) {
        sum += value;
    }
    return sum;
};

console.log(calculateTotalPrice(cartForParty))