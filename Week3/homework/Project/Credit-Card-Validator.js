function cardChecker(cardNumber) {

    if (cardNumber * 10 % 2 !== 0) {        // Check if cardNumber is not a number (if it has letters or symbols)

        const newCardNumber = prompt("Invalid Characters, Please Enter Just Numbers :");
        return cardChecker(newCardNumber);

    }

    else if (cardNumber * 10 % 2 === 0) {       // Check if cardnumber is a number

        const copyOfCardNumber = cardNumber;

        if (copyOfCardNumber.length !== 16) {

            const newCardNumber = prompt("The card number that you entered has not 16 digits, Please Enter a Valid Card Number :");
            return cardChecker(newCardNumber);

        }

        else if (copyOfCardNumber.length === 16) {      // Check if copyOfCardNumber has 16 digits

            for (let i = 1; i < copyOfCardNumber.length; i++) {     // This loop compare the first digit of copyOfCardNumber with the all other 15 digits 

                if (copyOfCardNumber[0] === copyOfCardNumber[i]) {

                    if (i === copyOfCardNumber.length - 1) {    // Check if it reached to the last digit of copyOfCardNumber

                        const newCardNumber = prompt("The card number that you entered has the same 16 digits, Please Enter a Valid Card Number :");
                        return cardChecker(newCardNumber);

                    }

                }

                else {

                    break;

                }

            }

            if (copyOfCardNumber[copyOfCardNumber.length - 1] % 2 !== 0) {      // Check if the last digit of copyOfCardNumber is ood

                const newCardNumber = prompt("The last digit of your card number is not even, Please Enter a Valid Card Number :");
                return cardChecker(newCardNumber);

            }

            else {                                                               // if the last digit of copyOfCardNumber is evev

                let sumOfdigits = 0;

                for (let i = 0; i < copyOfCardNumber.length; i++) {

                    const digitValue = copyOfCardNumber[i] * 1;
                    sumOfdigits = sumOfdigits + digitValue;

                }

                if (sumOfdigits <= 16) {                                        // Check if the sum of the all digits is equal or less than 16

                    const newCardNumber = prompt("The sum of your card digits are not greater than 16, Please Enter a Valid Card Number :");
                    return cardChecker(newCardNumber);

                }

                else {                                                          // if the sum of the all digits is greater than 16

                    console.log("Your Card Number is : " + cardNumber);
                    console.log("Your Card Number is valid because :");
                    console.log("* It has 16 digits.");
                    console.log("* All of the digits are not the same.");
                    console.log("* the final digit is even.");
                    console.log("* The sum of all the digits is : " + sumOfdigits + ". It is greater than 16.")
                    console.log("Thank You! ;-)"); 
                }

            }

        }

    }

}

let myCard = prompt("Please Enter Your Card Number :");

cardChecker(myCard);