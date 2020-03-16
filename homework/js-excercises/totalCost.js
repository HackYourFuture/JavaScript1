"use strict";
const calculateTotaPrice = cart =>
  console.log(eval(Object.values(cart).join("+")));
const cartForParty = {
  Milk: 1.29,
  Bread: 1.1,
  Pasta: 2.3,
  Cheese: 3.2,
  Beer: 1.4
};
calculateTotaPrice(cartForParty);
