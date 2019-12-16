'use strict';

function calculateTotalPrice(items) {
  let total = 0;
  for (let item in items) {
    total += items[item];
  }
  return `total price of all items is ${total}`;
}

const cartForParty = {
  jus: 3,
  biscuits: 2,
  cocacola: 1.5,
  water: 2.4,
  sandwich: 5
};

console.log(calculateTotalPrice(cartForParty));