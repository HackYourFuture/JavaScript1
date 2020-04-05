'use strict'

// -----------------------------------------CHECK THE LENGTH OF NUMBER--------------------------------------------
function numberOfdigit16(craditNumber){
    if (craditNumber.length === 16){
        return true;
    }else

        return false
    
}
// console.log(numberOfdigit16('3333333333333333'))//TEST


 //----------------------------------------------CHECK EVEN NUMBER-------------------------------------------------

 function checkEvenNum(craditNumber){
    if (craditNumber % 2 == 0 ){
        return true;
    }else{
        return false;
    }
}
// console.log(checkEvenNum('22222212'))//TEST


//----------------------------------------------- CHECK IF IT IS A NUMBER--------------------------------------------
function CheckIfNumber(craditNumber){
    if(isNaN(craditNumber)){
        return false;
    }else{
        return true;
    }
}
// console.log(CheckIfNumber('1.2'));//test

//--------------------------------------------------- SUM DIGIT NUMBER ---------------------------------------------------
function sumDigitNum(craditNumber){
    let sum=0;
  for(let i=0; i<craditNumber.length; i++){

        sum+=Number.parseInt([i])
  }
  if(sum>16){
      return true;
  }else{
      return false
  }
}
//----------------------------------------------check the number------------------------------------------------
// check if the number are the same
function checkDiffDigits(creditNumber) {
    let hasDiffDigits = false;
    // Make comparison between index positions
    for (let i = 0; i < creditNumber.length; i++) {
      // Check if the i is smaller than the length of creditNumber
      if (!(creditNumber[i + 1] === creditNumber.length)) {
        // Check if index positions compare
        if (creditNumber[i] === creditNumber[i + 1]) {
          hasDiffDigits = false;
        } else {
          hasDiffDigits = true;
          break;
        }
       }
    }
    return hasDiffDigits;
  }
//   console.log(checkDiffDigits('99999'));


   //-----------------------------------CHECK IF ALL THE CONDATION MATCH---------------------------- 
function creditCardValidation(craditNumber){
    if(checkEvenNum(craditNumber)){
        if (numberOfdigit16(craditNumber)){
            if(checkEvenNum(craditNumber)){
                if (sumDigitNum(craditNumber)){
                    if (checkDiffDigits(creditNumber)){

                    }else{
                        console.log(`you should have atleast one different digit `)
                    }
             
                }else{
                    console.log('Invalid! Your cridit card ')
                }

            }else{
                console.log(`Invalid! Your cridit card must has last number Even`)
            }

        }else {
            console.log(`Invalid! Your cridit card should be 16 numbers`)
        }
    }else{
        console.log(`Ivalind! Your input must be a number`)
    }

}

creditCardValidation('1234567890123456')



