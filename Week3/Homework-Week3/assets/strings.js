let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);

/* Global replace can only be done with a regular expression. 
  The regular expression in the following includes the global 
  and ignore case flags which permits replace() to replace each 
  occurrence of ',' in the string with ' '.
*/
let newstring = myString.replace(/,/gi, ' ');
console.log(newstring);
