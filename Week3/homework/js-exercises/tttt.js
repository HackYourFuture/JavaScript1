
function checkDifferentDidgits(cardNumber) {
    //initially i assume  no different digits
    let haveDiffDigits = false;

    //compare idex position
    for (let i = 0; i < cardNumber.length; i++) {
        if (!(i + 1 === cardNumber.length)) {
            //check if they are the same
            if (cardNumber[i] === cardNumber[i + 1]) {
                haveDiffDigits = false;

            } else {
                haveDiffDigits = true;

            }

        }
    }
    return haveDiffDigits;
};

//checkDifferentDidgits("4444444444444444");
console.log(checkDifferentDidgits('44444444444'));
console.log(checkDifferentDidgits('454'));