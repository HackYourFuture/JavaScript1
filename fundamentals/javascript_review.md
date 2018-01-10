### JavaScript review

You'll need to know the following before starting the Node class (remember Node is just JavaScript in a different environment - and you KNOW JS already - right?!?!)

```
From Jason:
jason [9:11 AM]
@timirkaria the most important topics will be sync/async and ajax. That and basic syntax (named and anonymous functions, callbacks, scope) should be sufficient!
```

### AJAX
Stands for *A*synchronous *J*avascript *A*nd *X*ml (think of XML as the old JSON) but now it's AJA*J* but that doesn't sound as good.

So here's an example of a SYNCHRONOUS request (it waits for the request to come back before continuing)

Code from: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#Example_HTTP_synchronous_request`

```js
const SECRET_MESSAGE_URL = 'https://gist.githubusercontent.com/tkaria/08325583e7411f7de6b80871780fd917/raw/61dae2869ae5013652bbeba1da2487097d8869b1/SecretMessage.txt'
const request = new XMLHttpRequest(SECRET_MESSAGE_URL);
request.open('GET', SECRET_MESSAGE_URL, false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
  console.log('Received the response');
}
console.log('Made the request')

```

And here's an example of an ASYNCHRONOUS version of the same request as above. Look carefully at the output.

```js
const SECRET_MESSAGE_URL = 'https://gist.githubusercontent.com/tkaria/08325583e7411f7de6b80871780fd917/raw/61dae2869ae5013652bbeba1da2487097d8869b1/SecretMessage.txt'
const xhr = new XMLHttpRequest();
xhr.open("GET", SECRET_MESSAGE_URL, true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      console.log('Received the response');
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
console.log('Made the request');
```

### What's happening here?
As always - read the docs first...
`https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest`

Create a new request and open it (lines 2 and 3)
Tell the request object what function to call when when the contents of the request are loaded. Inside the ANONYMOUS function which takes a parameter `e` we check the response code from the request (this is just HTTP stuff - nothing special). If the response code is good (200) then we print what we got.

More interesting is the order of the print statements. In the first example we saw the message `Received the response` **BEFORE** we saw the `Made the request` message because the program waited to get the response and print it before continuing to run.

In this case we see the `Made the request` message before we see the response because the program keeps running while waiting for the response. When the response is finally received it is printed before writing the `Received the response` to the console.

Note that we used an anonymous function here - it has no name. There's nothing special about an anonymous function. We could equally use a named function in the above example:

```js
const SECRET_MESSAGE_URL = 'https://gist.githubusercontent.com/tkaria/08325583e7411f7de6b80871780fd917/raw/61dae2869ae5013652bbeba1da2487097d8869b1/SecretMessage.txt'

const xhr = new XMLHttpRequest();
function NOT_ANONYMOUS_ON_LOAD_FUNCTION(parameter) {
   if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      console.log('Received the response');
    } else {
      console.error(xhr.statusText);
    }
  }
}
xhr.open("GET", SECRET_MESSAGE_URL, true);
xhr.onload = NOT_ANONYMOUS_ON_LOAD_FUNCTION; // Note: we are not CALLING the function - there are no ()
// We'll leave the error function the way it is and you can change it to a named function
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
console.log('Made the request');

```

### The big idea:

#### Sync / Async
Make requests without waiting for the response and just get "notified" when the response happens. That's the asynchronous part - don't wait for it and stop everything else just let me know when it happens. How can the computer let you know? You tell it what to do when the async function is ready (has something to say - success or failure)

#### Named and anonymous functions
Some functions have names and some don't. Sometimes you just want to use a function to pass it to another function so you don't need to name it. It never needs to be called outside of the function that you're passing it to so it doesn't need a name.
The simplest asynchronous function that you will see all over the place is called `setTimeout` (right now you should be reaching for a new tab and typing `MDN setTimeout` into Google). Be patient when running the below - it takes 3 seconds...

For example (using a named function):
```js
function timeoutFunction() {
  console.log('Starting timeoutFunction');
  console.log('Ending timeoutFunction');
}
setTimeout(timeoutFunction, 3000);
console.log('After timeoutFunction');
```

For example (using an anonymous function):
```js
setTimeout(function() {
    console.log('Starting timeoutFunction');
    console.log('Ending timeoutFunction');
  } , 3000);
console.log('After timeoutFunction');
```

For example (using an anonymous fat arrow function):
```js
setTimeout(() => { console.log('Starting timeoutFunction');
    console.log('Ending timeoutFunction');
  } , 3000);
console.log('After timeoutFunction');
```

#### Callbacks
What to do when the result of an async request is returned. Remember that requests can succeed as well as fail. Plan for (AND TEST) both.

#### Scope
I think we covered this pretty well with our discussion of closures in the last class but let me know if you need more.

## Recap
Read this - you may not understand it all but please read it before you read anything else about closures. The reason is that this is source material - this is the primary documentation. It is written very technically and in a bit of a boring way but there's a reason (as we talked about in class). The reason is to be clear so the language is precise and technical. It's OK if you don't get it now but just read it and it will stay in the back of your head.
https://developer.mozilla.org/en/docs/Web/JavaScript/Closures

Please TYPE these exercises - do NOT copy and paste.  BEFORE you run them please make a guess in your head about what will happen.
```js
function init() {
  const name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

```js
function init() {
  const name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
}
displayName();
```

```js
const name = 'Hack your future'
function init() {
  const name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

```js
const name = 'Hack your future'
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
```js
function sayHello(name) {
    return 'Hello ' + name;
}
```

Same as above with arrow (fat arrow) notation - shorthand notation. This is easy to mess up. Notice no return.
```js
const sayHello2 = (name) => 'Hello ' + name;
```

Same as above with arrow (fat arrow) notation - shorthand notation.  Better - easier to read - with return.
```js
const sayHello2 = (name) => {return 'Hello ' + name;}
```

Think about this one
``` js
function Person(firstName) {
    this.firstName = firstName;
}
```

Looks the same but what happens? See if you can figure out why from reading the documentation.
```js
const Person = (firstName) => {this.firstName = firstName}
```

Closures and async functions
What's going on here - I would expect 3 alerts with 1,2,3 in them but noooooooooo
```js
for (var i = 0; i < 3; i++) {
    setTimeout(function callBackFunction() {
        alert(i);
    }, 100);
}
```

### Make the above function do what we think it should do.

### Return examples
```js
Return values
function f1(x) {
    this.x = x + 1;
    return;
}

function f2(x) {
    return this.x = x + 1;
}
```

### Static members
http://odetocode.com/blogs/scott/archive/2015/02/02/static-members-in-es6.aspx

### Closures examples
https://jsfiddle.net/78dg25ax/?utm_source=website&utm_medium=embed&utm_campaign=78dg25ax

### Why closures are helpful with async code:
http://stackoverflow.com/questions/13343340/calling-an-asynchronous-function-within-a-for-loop-in-javascript

### Promises
http://stackoverflow.com/questions/13343340/calling-an-asynchronous-function-within-a-for-loop-in-javascript
https://www.youtube.com/watch?v=WBupia9oidU

