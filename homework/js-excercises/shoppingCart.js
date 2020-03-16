"use strict";
function addToShoppingCart(groceryItem) {
  if (groceryList.length >= 3) {
    groceryList.shift();
  }
  groceryList.push(groceryItem);
  console.log(`You bought ${groceryList}!`);
}
const groceryList = ["bananas", "milk"];

addToShoppingCart("bread");
addToShoppingCart("beer");
addToShoppingCart("pasta");
