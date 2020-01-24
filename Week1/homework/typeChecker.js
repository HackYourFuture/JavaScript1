let string1 = "hello" ;
let string2 = "world" ;
let object1 = {myFirstName:"Mohammad" , myLastName:"Fakhera"};
let object2 = {myAge:31 , AmIProgrammer:true};
console.log(typeof string1)
console.log(typeof string2)
console.log(typeof object1)
console.log(typeof object2)
function datatype(x,y) {
if (typeof x === typeof y ) { console.log("SAME TYPE");} 
else {console.log("Not the same...");}
};
datatype (string1,string2);
datatype (string1,object1);
datatype (string1,object2);
datatype (string2,string1);
datatype (string2,object1);
datatype (string2,object2);
datatype (object1,string1);
datatype (object1,string2);
datatype (object1,object2);
datatype (object2,string1);
datatype (object2,string2);
datatype (object2,object1);
