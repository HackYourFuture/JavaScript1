'use strict'

function calculateTotalPrice (shoppingCart) {

    let sum=0
    
    for (let item in shoppingCart) {
        sum+=(shoppingCart[item])
        
    }
    return sum
}


let cartForParty = {beer: 1, chips: 2,wine: 15, pizza:8, juice: 2}

console.log(calculateTotalPrice(cartForParty))
