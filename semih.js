/*Assignment #1*/
/*printing hello world in a couple of languages with console.log function */
console.log("Hello World // English");
console.log("Merhaba Dünya // Turkish");
console.log("Привет, мир // Russian");
console.log("Hallo Wereld // Dutch");


/*Assignment #2*/
/*added \ for escape character*/ 
console.log('I\'m awesome'); 


/*Assignment #3*/
let x;
console.log("The value of my variable x will be: 'undefined'");
console.log(x);
x = 0;
console.log("The value of my variable x will be: 0");
console.log(x);

/*Assignment #4*/
let y = "some_string";
console.log("The value of my variable y will be: 'some_string'");
console.log(y);
y = "new_string"
console.log("The value of my variable y will be: 'new_string'");
console.log(y);


/*Assignment #5*/
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let highestvalue;

if (a<z) {
    highestvalue=z;
} else {
    highestvalue=a;
}

console.log(highestvalue);


/*Assignment #6*/
let items=[];
console.log("The value of my array will be:'[]'");
console.log(items);
let favorite_animals=["horse", "lion", "tiger", "bird", "turtle"];
console.log(favorite_animals);
favorite_animals.push("baby pig");
console.log(favorite_animals);


/*Assignment #7*/
let myString="this is a test";
console.log(myString);
let string_length=myString.length;
console.log(string_length);


/*Assignment #8*/
let my_number=0;
console.log("The value of the variable my_number is: " + my_number);
console.log("The type of the variable my_number should be 'number'.");
console.log(typeof(my_number));

let my_string="some string";
console.log("The value of the variable my_string is: " + my_string);
console.log("The type of the variable my_string should be 'string'.");
console.log(typeof(my_string));

let my_boolean=true;
console.log("The value of the variable my_boolean is: " + my_boolean);
console.log("The type of the variable my_boolean should be 'boolean'.");
console.log(typeof(my_boolean));

let my_array=[my_string,my_number,my_boolean];
console.log("The value of the variable my_array is: " + my_array);
console.log("The type of the variable my_array should be 'object'.");
console.log(typeof(my_array));

if (typeof(my_number) == typeof(my_string)) {
    console.log("same type");
}   else{
    console.log("different type");
}

if (typeof(my_boolean) == typeof(my_array)) {
    console.log("same type");
}   else{
    console.log("different type");
}


/*Assignment #9*/
console.log("% (modulo) gives us the remainder of a division.");
console.log("so if we write the following statement: let x = 4%2; then the value of the variable x would be 0");
console.log("here is an example:");
let x=7;
x=x%3;
console.log("If x=7, the answer of x=x%3 should be: ",x);


/*Assignment #10*/
let my_number=0;
let my_string="some string";
let my_boolean=true;
let my_array=[my_string,my_number,my_boolean];

console.log(my_array);

if (6/0 === 10/0) {
    console.log("yes, we can compare infinities.")
} else{
    console.log("sorry, no can do :/ ")
}