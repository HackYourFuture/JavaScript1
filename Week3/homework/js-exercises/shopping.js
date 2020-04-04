'use strict'
const arr = ['bananas', 'milk'];
// function to remove first item if its more than 3
function addToShoppingCart(groceryItem) {
    arr.push(groceryItem);
    if (arr.length > 3) {
        arr.shift();
    }
};
addToShoppingCart('Cola');
addToShoppingCart('Tomaat');
addToShoppingCart('Mint');
console.log(arr);