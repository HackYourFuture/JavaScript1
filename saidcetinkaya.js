// Question 1 //

console.log('Hello World')
console.log('Halo Dunia ')
console.log('Hola Mundo')



// Question 2 //

console.log('I\'m awesome');
console.log("I'm awesome");



// Question 3 //

let x;
console.log('the value of my variable x will be: undefined');
console.log(x);
x = 1;
console.log("the value of my variable x will be: 1");
console.log(x);



// Question 4 //

let y = 'string';
console.log('y will be: string');
console.log(y);
y = 'not the one before';
console.log('y will be: not the one before');
console.log(y);



// Question 5 //

let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let highest = Math.max(a, z);
console.log(highest);



// Question 6 //

let wildOnes = [];
console.log('wildOnes will be: []');
console.log(wildOnes);
let animals = ['snake', 'cat', 'dog', 'horse'];
console.log(animals);
animals.push('baby pig');
console.log(animals);



// Question 7 //

let myString = "this is a test";
console.log(myString);
console.log(myString.length);



// Question 8 //

let b = 'string', c = 1, d = ['array'], e = {'key':'value'};
console.log("The value of my variable a is: " + b);
console.log("The value of my variable b is: " + c);
console.log("The value of my variable c is: " + d);
console.log("The value of my variable d is: " + e);
console.log('b is string');
console.log('c is number');
console.log('d is array');
console.log('e is object');
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
let controlObject = {
    'b': b, 
    'c': c, 
    'd': d, 
    'e': e
};
let i, j;
for (i = 0; i < Object.keys(controlObject).length - 1; i++ ) {
    for(j = i + 1; j < Object.keys(controlObject).length; j++) {
        if (typeof(Object.values(controlObject)[i]) == typeof(Object.values(controlObject)[j])){
            console.log(Object.keys(controlObject)[i] + ' and ' + Object.keys(controlObject)[j] + ' are same type');
        }
        else {
            console.log(Object.keys(controlObject)[i] + ' and ' + Object.keys(controlObject)[j] + ' are not same type');
        }
    }
}



// Question 9 //

x = 7;
x = x % 3;
console.log(x);
console.log(8 % 3);
console.log(9 % 3);
console.log(12 % 5 == 12 % 10);



// Question 10 //

/*10.1*/
let array, f, g, h, k, l;
f = 'abc';
g = 1;
h = true;
k = {
    'key': 'value'
}
array = [f,g,h,k,l];
console.log(array);

/* 10.2 */
if (6/0 === 10/0){
    console.log('Equal');
}else {
    console.log('Not Equal');
}