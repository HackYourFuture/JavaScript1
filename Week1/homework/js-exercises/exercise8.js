// exercise 8
"use strict"
let str="";
function print(str) {
    console.log(str);
}
let str1="";
let str2="";
let obj1={};
let obj2={};
if (typeof(str1)==typeof(str2)) print ("\nstr1 and str2 same data type"); else print("\nstr1 and str2 different data type");
if (typeof(str1)==typeof(obj1)) print ("str1 and obj1 same data type"); else print("str1 and obj1 different data type");
if (typeof(str1)==typeof(obj2)) print ("str1 and obj2 same data type"); else print("str1 and obj2 different data type");
if (typeof(str2)==typeof(obj1)) print ("str2 and obj1 same data type"); else print("str2 and obj1 different data type");
if (typeof(str2)==typeof(obj2)) print ("str2 and obj2 same data type"); else print("str2 and obj2 different data type");
if (typeof(obj1)==typeof(obj2)) print ("obj1 and obj2 same data type"); else print("obj1 and obj2 different data type");

function dataType(par1,par2,namePar1,namePar2){
    if (typeof(par1)==typeof(par2)) print (`${namePar1}  and ${namePar2} same data type\n`);
    else  print(`${namePar1} and ${namePar2} same data type\n`);
    }
dataType(obj1,str2,"obj1","str2");