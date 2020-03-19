'use strict';
//declare variable
let firstName = 'ahmed';
let lastName = 'shahwan';

// declare 2 objects variable
let address = {
  postCode: '1214hr',
  city: 'Hilversum',
};
let dateOfBirth = {
  year: 1988,
  month: 'march',
  day: 10,
};

//print the data type of the variable
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof address);
console.log(typeof dateOfBirth);

//set 6 conditional statements using if else
if (typeof firstName === typeof lastName) {
  console.log('Same  Type');
} else {
  console.log('NOT the Same');
}

if (typeof firstName === typeof day) {
  console.log('Same Type');
} else {
  console.log('NOT the Same');
}

if (typeof address === typeof dateOfBirth) {
  console.log('Same Type');
} else {
  console.log('NOT the Same');
}
if (typeof firstName === typeof address) {
  console.log('Same  Type');
} else {
  console.log('NOT the same');
}
//conditional statements using different method
typeof day === typeof month
  ? console.log('Same type')
  : console.log('NOT the Same');

typeof postCode === typeof dateOfBirth
  ? console.log('Same type')
  : console.log('Not the Same');
