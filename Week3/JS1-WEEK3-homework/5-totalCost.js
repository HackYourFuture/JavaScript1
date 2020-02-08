"use strict";

// Exercise 5: Total cost is ...
// You want to buy a couple of things from the supermarket to prepare for a party. After scanning 
// all the items the cashier gives you the total price, 
// but the machine a broken! Let's write her a function that does it for her instead!
// Write a function called calculateTotalPrice
// It takes 1 argument: an object that contains properties that only contain number values
// Add all the number values together
// Return a number: the total price of all items
// Create an object named cartForParty with 5 properties. Each property should be a grocery item 
// (like beers or chips) and hold a number value (like 1.75 or 0.99)
// Call the function 1 time, giving it the object cartForParty as an argument

const stuffOfParty = {
    cola: 15,
    pasta: 27.99,
    cookies: 15.99,
    beers: 19.99,
    chips: 6.49,

};

function calculateTotalPrice(shoppingList) {
    let totalPrice = 0;
    for (let shoppingItem in shoppingList) {
        totalPrice += shoppingList[shoppingItem];
    }
    return totalPrice;
}

console.log('Total price is ' + calculateTotalPrice(stuffOfParty) + ' €.');