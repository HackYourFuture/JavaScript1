"use strict";

let cartForParty = {
    chips: 1.50,
    cola: 1.75
};

const calculateTotalPrice = (obj) => {
    return Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0);
}
var totalPrice = calculateTotalPrice(cartForParty);
console.log(totalPrice);


