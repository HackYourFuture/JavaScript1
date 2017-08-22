var testValue = ''; 
console.log('var testValue = \'\'; gives: ', testValue);

var testValue = 0; 
console.log('var testValue = 0; gives: ', testValue);

var testValue = null; 
console.log('var testValue = null; gives: ', testValue);

var testValue = undefined;
console.log('var testValue = undefined; gives: ', testValue);

var testValue;
console.log('var testValue; gives: ', testValue);

var testValue = ''; 
console.log('var testValue = \'\'; gives: ', testValue);

var someVar = testValue || 'Default';
console.log('var someVar = testValue || \'Default\' = 0; gives: ', someVar);
