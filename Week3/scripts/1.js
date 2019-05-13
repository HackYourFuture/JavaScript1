function een(){
    console.clear();
    
    let myString = "hello,this,is,a,difficult,to,read,sentence";
    console.log(myString);
    console.log(myString.length);
    // Regexp should be used ......
    var reg = /,/gi;
    myString = myString.replace(reg, ' ');
    console.log(myString);
}


