// Create a function that takes 3 arguments and returns the sum of the these arguments.

function sum(){
    let sum =0; 
    for(let i=0;i<arguments.length;i++){
       sum += arguments[i];
    }
     return sum;
  }
 console.log('1 + 2 =', sum(1,2)); // = 3
 console.log('1 + 8 + 3 =', sum(1,8,3)); // = 12


