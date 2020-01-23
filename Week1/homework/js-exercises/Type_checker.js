"use strict";


let arr=["Hello1","Hello2",{word:"Hello1"},{}]

let i;


let x;
// I know i have to creat 6 conditional statements so forgive me if im little bit lazy to write a short code :)
for(i=0;i<arr.length;i++)

{
    for(x=0;x<arr.length;x++)
    {
        if(arr[i]!=arr[x])
        {
            if  (typeof(arr[i])==typeof(arr[x]))
            {
              console.log("("+arr[i]+" type : "+typeof(arr[i])+ ") & ("+arr[x]+" type : "+ typeof(arr[x])+") same type");     
            }
          else
            {
             console.log ("("+arr[i]+" type : "+typeof(arr[i])+ ") & ("+arr[x]+" type : "+ typeof(arr[x])+") not the same type");
            }
        }      
    }
}
   
   
    

