'use strict';


let num = 4444444444444444 ; // not valid
let num1 = 1000111111111110 ; //not valid
let num2 = 9999999999999991 ; //not valid
let num3 = 8899777755550000 ;  //vaild
let num4 = 5554446669991666 ; //valid


checkCard(num);
checkCard(num1);
checkCard(num2);
checkCard(num3);
checkCard(num4)

function checkCard(creditNum){
    // it must be 16 numbers
    let length ;

    //  change the number to a string so it has length property
    let creditNumString = creditNum.toString(); 

    //change the number to an array that so it has one string of the number
    let creditNumArr = creditNumString.split(',');

    // check if the number has 16 digits
    if (creditNumString.length< 16 || creditNumString.length > 16) {
        length = false; 

     } else { 
        length = true;
     }

// The final digit must be even
     let finalIsEven;
     if (creditNumString[15] % 2 === 0) {
        finalIsEven = true; 
    } else {
        finalIsEven = false; 
    }

    // The sum of all the digits must be greater than 16
    let sumHigherThan16

    // to be able to sum the numbers, must to make it an arry
    let creditNumArrOfStrings = [];
    for (var i = 0; i < creditNumString.length; i++) {
        creditNumArrOfStrings.push(parseFloat(creditNumString[i]));
    }
    
    // this calculates the numbers 
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = creditNumArrOfStrings.reduce(reducer);

    if (sum <= 16) {
        sumHigherThan16 = false;
    } else {
        sumHigherThan16 = true;} 


// the digits cannot be the same
    let notTheSameNum ;

    // make it an arry
    const allEqual = creditNumArrOfStrings => creditNumArrOfStrings.every( v => v === creditNumArrOfStrings[0] ); 
    if (allEqual(creditNumArrOfStrings)) {
        notTheSameNum = false;
    } else {
        notTheSameNum = true; 
    }

if (length && notTheSameNum && finalIsEven && sumHigherThan16) {
    console.log('Valid credit card Number');
} else { console.log(`${creditNum} is not valid. Please enter another number`);
}

    }


