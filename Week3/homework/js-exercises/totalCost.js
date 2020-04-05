'use strict'


//object
const cartForParty={
    cola:1.50,
    milk:2.99,
    eggs:3,
    banana:2,
    fish:4}
    //function calculate the total
    function calculateTotalPrice(total){
        let sum=0;
        for(let value of Object.values(total)){
            
            sum += value;
        }
        return sum;
    }
    console.log(calculateTotalPrice(cartForParty));
