
// let numbergrade = 86;
// if(numbergrade >= 90){
// 	console.log(numbergrade.value = "A+");
// }
// else if(89 >= numbergrade && numbergrade >= 85){ // you reach this point only if all previous confitions are false
// console.log(numbergrade.value = "b");
// }
// else if(84 >= numbergrade && numbergrade >= 80){ // you reach this point only if all previous confitions are false
// console.log(numbergrade.value = "c");
// }

// let x= 60;
// let y = 100;
// let calculatePercentage = ((x/y)*100);

// console.log(calculatePercentage);


var wholePercent = Math.floor(3/9*100);

// To turn it into a function:

function getWholePercent(percentFor,percentOf)
{
    return Math.floor(percentFor/percentOf*100);
}

// call it like this:

var wholePercent=getWholePercent(3,9);