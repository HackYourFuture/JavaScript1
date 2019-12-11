const cartForParty = {
    beers: 1.75, //1.75,
    chips: 0.99, //0.99,
    apple: 1.25, //1.25,
    cake: 0.89, //0.89,
    wine: 3.15, //3.15
}

let i;

function calculateTotalPrice(item) {
    let x = 0;
    for (i in item) {
        x += item[i];
    }
    let massege = `total cost for your cart is ${x}$`;
    return massege;
}

console.log(calculateTotalPrice(cartForParty));