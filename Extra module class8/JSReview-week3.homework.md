### Javascript review week 3
Read this - you may not understand it all but please read it before you read anything else about closures. The reason is that this is source material - this is the primary documentation. It is written very technically and in a bit of a boring way but there's a reason (as we talked about in class). The reason is to be clear so the language is precise and technical. It's OK if you don't get it now but just read it and it will stay in the back of your head. 
https://developer.mozilla.org/en/docs/Web/JavaScript/Closures

Please TYPE thse exercises - do NOT copy and paste.  BEFORE you run them please make a guess in your head about what will happen. 
```
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();
```

```
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
}
displayName();    
```

```
var name = 'Hack your future'
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();
}
init();
```

```
var name = 'Hack your future'
function init(name) {
  function displayName(name) { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName(name);
}
init('Hack your future again')
```

Now read this: http://stackoverflow.com/questions/11488014/asynchronous-process-inside-a-javascript-for-loop 

And try out the examples - please make SURE you understand what is happening. Ask questions if you do not. 

Same instructions as above but now for Arrow functions (remember this is not intended to confuse you - it's just code).
### Arrow functions
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
Then read this. 
http://stackoverflow.com/questions/22939130/when-should-i-use-arrow-functions-in-ecmascript-6/28135120#28135120

This is a normal function: 
```
function sayHello(name) {
    return 'Hello ' + name;
}
```

Same as above with arrow (fat arrow) notation - shorthand notation. This is easy to mess up. Notice no return. 
```
var sayHello2 = (name) => 'Hello ' + name;
```

Same as above with arrow (fat arrow) notation - shorthand notation.  Better - easier to read - with return. 
```
var sayHello2 = (name) => {return 'Hello ' + name;}
```

Think about this one
``` 
function Person(firstName) {
    this.firstName = firstName;
}
```

Looks the same but what happens? See if you can figure out why from reading the documentation. 
```
var Person = (firstName) => {this.firstName = firstName}
```

Closures and async functions
What's going on here - I would expect 3 alerts with 1,2,3 in them but noooooooooo
```
var i;
for (i = 0; i < 3; i++) {
    setTimeout(function callBackFunction() {
        alert(i);
    }, 100);
}
```

### Make the above function do what we think it should do. 
