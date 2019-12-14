'use strict'
function addToShoppingCart(groceryItem){  
 groceryItems.push(groceryItem); 
if (groceryItems.length > 3){
 groceryItems.shift();
};
 return `You bought ${groceryItems.join()}!`;
};
let groceryItems= ['bananas', 'milk'];
console.log(addToShoppingCart('pear'));
console.log(addToShoppingCart('apple'));
console.log(addToShoppingCart('berry'));

