### Javascript review week 3 - Part 2
Jason indicated that you'll need to know the following before starting the Node class (remember Node is just Javascript in a different environment - and you KNOW JS already - right?!?!)

``` 
From Jason:
jason [9:11 AM] 
@timirkaria the most important topics will be sync/async and ajax. That and basic syntax (named and anonymous functions, callbacks, scope) should be sufficient!
```

### AJAX
Stands for *A*syncrhonous *J*avascript *A*nd *X*ml (think of XML as the old JSON) but now it's AJA*J* but that doesn't sound as good. 

So here's an example of a SYNCHRONOUS request (it waits for the request to come back before continuing)

Code from: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#Example_HTTP_synchronous_request`

```
var SECRET_MESSAGE_URL = 'https://gist.githubusercontent.com/tkaria/08325583e7411f7de6b80871780fd917/raw/61dae2869ae5013652bbeba1da2487097d8869b1/SecretMessage.txt'
var request = new XMLHttpRequest(SECRET_MESSAGE_URL);
request.open('GET', SECRET_MESSAGE_URL, false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
  console.log('Received the response');
}
console.log('Made the request')

```

And here's an example of an ASYNCHRONOUS version of the same request as above. Look carefully at the output. 

```
var SECRET_MESSAGE_URL = 'https://gist.githubusercontent.com/tkaria/08325583e7411f7de6b80871780fd917/raw/61dae2869ae5013652bbeba1da2487097d8869b1/SecretMessage.txt'
var xhr = new XMLHttpRequest();
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
Tell the request object what function to call when when the contents of the request are loaded. Inside the ANONYMOUS function which takes a parameter `e` we check the response code from the request (this is just HTTP stuff - nothing special). If the reponse code is good (200) then we print what we got. 

More interesting is the order of the print statements. In the first example we saw the message `Received the response` **BEFORE** we saw the `Made the request` message because the program waited to get the response and print it before continuing to run. 

In this case we see the `Made the request` message before we see the response because the program keeps running while waiting for the response. When the response is finally received it is printed before writing the `Received the response` to the console. 

Note that we used an anonymous function here - it has no name. There's nothing special about an anonymous function. We could equally use a named function in the above example:

```
var SECRET_MESSAGE_URL = 'https://gist.githubusercontent.com/tkaria/08325583e7411f7de6b80871780fd917/raw/61dae2869ae5013652bbeba1da2487097d8869b1/SecretMessage.txt'

var xhr = new XMLHttpRequest();
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
Make requests without waiting for the response and just get "notified" when the response happens. That's the asyncrhonous part - don't wait for it and stop everything else just let me know when it happens. How can the computer let you know? You tell it what to do when the async function is ready (has something to say - success or failure) 

#### Named and anonymous functions
Some functions have names and some don't. Sometimes you just want to use a function to pass it to another function so you don't need to name it. It never needs to be called outside of the function that you're passing it to so it doesn't need a name. 
The simplest asynchonous function that you will see all over the place is called `setTimeout` (right now you should be reaching for a new tab and typing `MDN setTimeout` into Google). Be patient when running the below - it takes 3 seconds...

For example (using a named function):
```
function timeoutFunction() {
  console.log('Starting timeoutFunction');
  console.log('Ending timeoutFunction');
}
setTimeout(timeoutFunction, 3000);
console.log('After timeoutFunction');
```

For example (using an anonymous function):
```
setTimeout(function() {
    console.log('Starting timeoutFunction');
    console.log('Ending timeoutFunction');
  } , 3000);
console.log('After timeoutFunction');
```

For example (using an anonymous fat arrow function):
```
setTimeout(() => { console.log('Starting timeoutFunction');
    console.log('Ending timeoutFunction');
  } , 3000);
console.log('After timeoutFunction');
```

#### Callbacks
What to do when the result of an async request is returned. Remember that requests can succeed as well as fail. Plan for (AND TEST) both.

#### Scope
I think we covered this pretty well with our discussion of closures in the last class but let me know if you need more. 

