let mySon = 'yigit';
let hisSecondName = 'asim'
let hisAge = 5;
let hisToys = ['lego','bike','cars'];
let hisBoolean = true;
let foo;

console.log("The value of my variable mySon is: " + mySon);
console.log("The value of my variable hisSecondName is: " + hisSecondName);
console.log("The value of my variable hisAge is: " + hisAge);
console.log("The value of my variable hisToys is: " + hisToys);
console.log("The value of my variable hisBoolean is: " + hisBoolean);
console.log("The value of my variable foo is: " + foo);


console.log("The type of my variable mySon is:   string");
console.log("The type of my variable hisSecondName is:   string");
console.log("The type of my variable hisAge is:   number");
console.log("The type of my variable hisToys is:   object");
console.log("The type of my variable hisBoolean is: boolean");
console.log("The type of my variable foo is: undefined");


console.log(typeof mySon);
console.log(typeof hisSecondName);
console.log(typeof hisAge);
console.log(typeof hisToys);
console.log(typeof hisBoolean);
console.log(typeof foo);

if (typeof hisBoolean == typeof hisAge) 
{console.log('SAME TYPE');}
else {console.log('Don\'t have the same type');}

if (typeof foo == typeof hisToys) 
{console.log('SAME TYPE');}
else {console.log('Don\'t have the same type');}

if (typeof mySon == typeof hisSecondName) 
{console.log('SAME TYPE');}
else {console.log('Don\'t have the same type');}

if (typeof mySon == typeof hisToys) 
{console.log('SAME TYPE');}
else {console.log('Don\'t have the same type');}






