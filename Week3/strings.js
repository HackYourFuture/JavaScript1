let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
for (i=0; i<7; i++){
    myString = myString.replace(',' , ' ');
}
console.log(myString);