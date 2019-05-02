let str1 = 'string1';
let num1 = 13;
let bool = true;
let arr = ['cat', 'dog'];
let str2 = 'string2';
let num2 = 14;

console.log("The value of my variable str1 is: " + str1);
console.log("The value of my variable num1 is: " + num1);
console.log("The value of my variable bool is: " + bool);
console.log("The values of my variable arr is: " + arr);
console.log("The value of my variable str2 is: " + str2);
console.log("The value of my variable num2 is: " + num2);
console.log('\n');

console.log('the type of str1 will be: String');
console.log('the type of num1 will be: Number');
console.log('the type of bool will be: Boolean');
console.log('the type of arr will be: Object');
console.log('the type of str2 will be: String');
console.log('the type of num2 will be: Number');
console.log('\n');

console.log('the type of str1 is: ' + typeof(str1));
console.log('the type of num1 is: ' + typeof(num1));
console.log('the type of bool is: ' + typeof(bool));
console.log('the type of arr is: ' + typeof(arr));
console.log('the type of str2 is: ' + typeof(str2));
console.log('the type of num2 is: ' + typeof(num2));
console.log('\n');

let variables = [];
variables[0] = str1;
variables[1] = num1;
variables[2] = bool;
variables[3] = arr;
variables[4] = str2;
variables[5] = num2;

let variableName = [
    'str1',
    'num1',
    'bool',
    'arr',
    'str2',
    'num2'
];

for(let i = 0; i < (variables.length - 1); i++)
{
    for(let j = (i + 1); j < variables.length; j++)
    {
        if(typeof(variables[i]) == typeof(variables[j]))
        {
            console.log(variableName[i] + ' and ' + variableName[j] + ' are : SAME TYPE');
        }
        else
        {
            console.log(variableName[i] + ' and ' + variableName[j] + ' are : NOT SAME TYPE');
        }
    }
    console.log('\n');
}

console.log('\n\n');
