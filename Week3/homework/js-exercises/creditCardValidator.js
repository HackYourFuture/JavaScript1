'use strict'

function ccValidator(number) {
    let ccNum=number.toString();
    let ccNumSplit=ccNum.split("");
    let lastDigit=ccNum.slice(-1);

    /*
    ho ho ho regex shall we have this dance again. ❤️ 🥰
    quick explanation for my fellow (classmates || readers) 
    1- (\d{16}) matches a digit and being specified by 16 
    2- (~W) matches any weird character (.,_ etc).
    3- ([a-zA-Z]) matches all the letters of the english alphabet.
    4- * matches a character once or multiple times.
    5- $ signifies the end of the search/line.
    6- g is the global search.  
    */

    if ((ccNum.length>16) || (!/\d{16}(~W[a-zA-Z])*$/g.test(ccNum))) {
        return console.log (`Credit card should consist of 16 digits`);
        
    }else if (lastDigit % 2 !==0) {
        return console.log(`The last digits must be an even number`);
    }

    let sumNum=(ccNumSplit.join('+'));

    function countUnique(iterable) {
        return new Set(iterable).size;
      }      

    let uniqueNum=countUnique(ccNumSplit);


     if (sumNum <= 16){
        return console.log(`The digits must be greater than 16`);
        
    }else if (uniqueNum ==1){
        return console.log(`The digits must have different numbers`);
    
    }else{
        return console.log (`That is a valid CC Number ${ccNum}`);
        
    }
}

(ccValidator ('a92332119c011112'))
