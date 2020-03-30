"use strict";

let groceryArray = ["bananas", "milk"];

const addToShoppingCart = (groceryItem = "") => {
    if (groceryItem != "") groceryArray.push(groceryItem);

    if (groceryArray.length > 3) groceryArray.shift();
};

addToShoppingCart("apple");
addToShoppingCart("orange");
addToShoppingCart("biscuit");
console.log(groceryArray);
/* Another way
function addToShoppingCart(groceryItem = "") {
  if (groceryItem != "") groceryArray.push(groceryItem);

  if (groceryArray.length > 3) groceryArray.shift();
}

addToShoppingCart("apple");
console.log(groceryArray);
*/
