"use strict";

let Hello_Arr=["Arabic : Marhaba","Chinese : Nǐ hǎo","Dutch : Hoi","French : Bonjour","Hindi : Namaste","Hungarian : Jo napot",
"Persian : Salam" ,"Portuguese : Olá","Spanish : Hola" ,"Zulu : Sawubona"];

for(let index=0;index<Hello_Arr.length;index++)
{
 HelloWolrd(Hello_Arr[index]);
}


function HelloWolrd(s)
{
console.log(s+" // :-) ");
}