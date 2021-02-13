'use strict'

/*

4. PROJECT: Credit Card Validator
Every week ends with a project you have to build on your own. Instead of getting clear-cut instructions, you'll get a list of criteria that your project needs to measure up to.

In this project you'll write a function, called validateCreditNumber, that validates whether or not a credit card number is valid.

Here are the criteria for a valid number:

Input must be 16 characters
All characters must be numbers
At least two different numbers should be represented
The last number must be even
The sum of all the numbers must be greater than 16
The following credit card numbers are valid:

9999777788880000
6666666666661666
The following credit card numbers are invalid:

a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
// Expected output

validateCreditNumber('a92332119c011112'); // Returns "Invalid! The input a92332119c011112 should contain only numbers!
validateCreditNumber('4444444444444444'); // Returns "Invalid! The input 4444444444444444 should contain at least 2 different types of numbers!
validatecreditNumber('6666666666661666'); // Returns "Success! The input 6666666666661666 is a valid credit card number!
After you've written your function, use node in the command line to test to see if your code works as expected.

Good luck!

*/

