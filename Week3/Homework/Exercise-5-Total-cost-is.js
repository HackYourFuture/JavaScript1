function calculateTotalPrice(order) {

    let totalPrice = 0;
    for (let i in order) {

        totalPrice = totalPrice + order[i];
    }

    return "The total price of all items is : " + totalPrice + " $."

}

const cartForParty = {

    chips : 0.99,
    cookies : 1.99,
    juice : 1.2,
    cola : 1.5,
    chocolate : 2.5,
}

console.log(calculateTotalPrice(cartForParty));


// console.log(cartForParty(2));