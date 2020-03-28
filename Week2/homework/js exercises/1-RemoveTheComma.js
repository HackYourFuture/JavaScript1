//Add the variable to your file.
let myString = "hello,this,is,a,difficult,to,read,sentence";


//Log the length of myString.
console.log(myString.length);

//The commas make that the sentence is quite 
//hard to read. Find a way to remove the commas
//from the string and replace them with spaces. (use Google!)
myString = myString.replace(/,/g, ' ');
//https://www.youtube.com/watch?v=7a-a6lKoyIQ   (05:00-06:00)

//After replacing the commas, log myString 
//to see if you succeeded.
console.log(myString);
