// exercise 5
"use strict"
let str="";
function print(str) {
    console.log(str);
}
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