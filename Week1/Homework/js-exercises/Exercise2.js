'use strict';

//console.log ('I'm awesome); error output is wrong to use the second single quote.
//i solve this problem with this ways:

console.log("I'm awesome"); // fisrt way
console.log(`I'm awesome`); // scond way

/* error output

Unexpected token, expected , (2:16)
  1 | 'use strict';
> 2 | console.log('I'm awesome');
    |                ^ 
The value got three quotes so I used double quote at
the beginning and end of the value or string To fix the error . */
