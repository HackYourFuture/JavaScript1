let mixedTypedArray = [1,true,"string"];
console.log("An array with different types of element is allowed in Java script. Consider mixedTypedArray");
console.log("firt element is "+ typeof mixedTypedArray[0]);
console.log("second element is "+ typeof mixedTypedArray[1]);
console.log("third element is "+ typeof mixedTypedArray[2]);

let inf1 = 10/0;
let inf2 = 2/0;
console.log("value of first variable: "+inf1+" value of second variable: "+inf2+ " and type of the variables is "+typeof inf1);
console.log("are they equal?")
if(inf1===inf2){
    console.log(true);
}
else{
    console.log(false)
}
