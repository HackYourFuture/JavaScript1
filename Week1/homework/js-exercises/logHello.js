"use strict"
//exercise 1
let str="";
function print(str) {
    console.log(str);
}
print("Hello"); //English
print("Hallo"); // Dutch
print("Helo"); // Filipino
print("Bonjour"); // French
print("Guten Tag"); // German
print("Geia"); // Greek
print("Namasté"); // Hindi
print("Buongiorno"); // Italian
print("Salâm"); // Persian
print("ابحرم"); // Arabic
//exercise 2
print('I\'m awesome');
// exercise 3
let numberX;
print("numberX is undefined variable");
print(numberX);
numberX=3;
print("numberX is 3 which is an integer number");
print(numberX);
// exercise 4
let myString="Baraa Kolly";
print("myString has a string value which is \"Baraa Kolly\" ");
print(myString);
myString="new String";
print("myString has a string value which is \"new String\" ");
print(myString);
// exercise 5
let z=7.25;
print(z);
let a=Math.round(z);
print(a);
let maxNum=0;
function max(par1,par2){
if (par1>par2) return par1;
else return par2 ;
}
maxNum=max(z,a);
print("the maximum number is "+maxNum);
// exercise 6
let list=[];
print("the valuse of list is an empty array ");
print(list);
let animalsList=["cat","dog","monkey"];
print(animalsList);
animalsList.push("Piglet");
print(animalsList);
// exercise 7
let myStr="Programming is so interesting!";
print("the lengt of the string is "+myStr.length);
// exercise 8
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
/* exercise 9
1.If x equals 7, and the only other statement is x = x % 3, what would be the value of x after the calculation?
x=1 because 7%3=2 with a remainder of 1
2.If y equals 21, and the only other statement is y = y % 4, what would be the value of y after the calculation?
y=1 because 21%4=5 with a remainder of 1
3.If z equals 13, and the only other statement is z = z % 2, what would be the value of z after the calculation?
z=1 because 13%2=6 with a remainder of 1 */

//exercise 10
let a1= new Array(4);
let a2= new Array(7);
console.log('The length of the array is...' + a1.length);
console.log('The length of the array is...' + a2.length);
if(a1.length==a2.length) print("a1 and a1 same length"); else print ("a1 and a2 not same length");