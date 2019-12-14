'use strict'
function calculateTotalPrice(objectValue){
 let total =0;
    for (let item in objectValue){
        total += objectValue[item];
    }
return total.toFixed(2);
}
const cartForParty = {
    chips: 1.15,
    drink: 40,
    apple: 1.19,
    cakes: 5,
    pizza: 6, 
};  
console.log(calculateTotalPrice(cartForParty));// 53.34;
