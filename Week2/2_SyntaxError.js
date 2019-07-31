console.log('I\'m awesome')
 // Error type:  SyntaxError: missing ) after argument list } 

 // Reason    :  here is no "+" operator to concatenate the string
 //              so JavaScript expects the argument for the log function to be just 'I'. 
 //              In that case, it should be terminated by a closing parenthesis.

 // Solution  :  Adding backslash (\) after 'I 
