`use strict`;
function calculateTotalPrice(items) {
  let sum = 0;
  for (let item in items) {
    sum += items[item];
  }
  return `total price of all items is ${sum}`;
}

const cartForParty = {
  beer: 1.75,
  chips: 0.99,
  wine: 8.99,
  water: 1.5,
  redbull: 4.55,
};

console.log(calculateTotalPrice(cartForParty));
