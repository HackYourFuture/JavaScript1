"use strict";

// Exercise 4: Shopping at the supermarket
// Let's do some grocery shopping! We're going to get some things to cook dinner with. However, 
// you like to spend your money and always buy too many things. So when you have more than 3 items in 
// your shopping cart the first item gets taken out.
// Write a function named addToShoppingCart.
// It takes in 1 argument: a grocery item (string)
// Add grocery item to array. If the amount of items is more than 3 remove the first one in the array
// Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
// Create an array with 2 predefined strings: "bananas" and "milk"
// Call the function 3 times, each time with a different string as the argument.



const shoppingList = ['bananas', 'milk'];

function addToShoppingList(groceryItem) {
    shoppingList.push(groceryItem);

  if (shoppingList.length > 3) {
    shoppingList.shift();
  }
  return `You bought ${shoppingList.join(', ')}!`;
}

console.log(addToShoppingList('cucumber'));
console.log(addToShoppingList('onion'));
console.log(addToShoppingList('orange'));

