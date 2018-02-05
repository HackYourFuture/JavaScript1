# What is 'this'?

At any point during the execution of a JavaScript program there is a context-dependent value that you can access through the keyword `this`. Often, the value of `this` is simply `undefined` and therefore not of much significance for use in your own code.

> Note: The value of `this` is only useful if used inside a function. When accessed outside of any function, the value of `this` is different depending on whether you run your program in the browser or in Node. In the case of the browser, the value of `this` refers to the global `window` object. In the case of Node, the value of `this` outside any function is an empty object (`{}`).

## Regular functions and `this`

Let's look at the value of `this` when used in a regular function:

```js
'use strict';

function whatIsThis(arg) {
  console.log(arg, this);
}

whatIsThis('Hello'); // --> Hello undefined
```

As mentioned, the value of `this` in this case is `undefined`. Note however that this is only the case if we start our file with the string literal `'use strict'`. (In versions of JavaScript prior to ES5 the `'use strict'` option did not exist.) If you leave out `'use strict'` then `this` refers to the 'global context' (in the browser this is the `window` object, in Node it is the `global` object).

In the example below you can see the effect (the shown output is for the browser).

```js
// left out: 'use strict';

function whatIsThis(arg) {
  console.log(arg, this);
}

whatIsThis('Hello'); // --> Hello 
                     //     ▶︎ Window {postMessage: f, ...}
```

Accessing the global context through `this` (accidentally or on purpose) is never a good idea, especially when it comes to forgetting to declare a variable. The designers of JavaScript recognised this as an issue and provided the `'use strict'` option in ES5 as a remedy.

More info on MDN: [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

## Function invocation through the `call` method

When you call a regular function by specifying its name followed by zero or more arguments enclosed within parentheses, the JavaScript engine in fact invokes the `call` method that exists on every function (yes, a function is actually a special type of JavaScript object). The code snippet below shows how a regular function is invoked behind the scenes by the JavaScript engine, setting the `this` value (the first argument of the `call` method) to `undefined`.

```js
'use strict';

function whatIsThis(arg) {
  console.log(arg, this);
}

whatIsThis.call(undefined, 'Hello'); // --> Hello undefined
```

We can use the `call` method ourselves and pass something else in place of `undefined`, as shown in the next snippet:

```js
whatIsThis.call('world!', 'Hello'); // --> Hello world!
```

However, in practice there are not many occasions where we would need to use the `call` method ourselves to set the value of `this`.

Next, we will see how `this` becomes relevant when used in combination with JavaScript objects.

More info on `this` and JavaScript function properties and methods:

- [Understanding JavaScript Function Invocation and "this"](http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/), by Yehuda Katz.
- MDN: [Function prototype object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#Function_prototype_object)

## JavaScript objects and 'this'

When used in conjunction with JavaScript methods (including those from ES6 classes) the `this` keyword gets overriding importance.

> **What is a method?** A method is a regular JavaScript function that is 'called on' an object, using dot notation. In almost all cases this function will be defined as a property of the object (or it's prototype) it is called upon. In ES6 classes, methods are directly defined as member functions on the class.

The example below shows a simple object with a data property `myData` and a method property `myMethod`. When `myMethod` is called using dot notation such as shown in the example below, the `this` value inside the method is set to the object itself. Hence, `myMethod` has access to the `myData` property through the `this` keyword.

```js
const myObj = {
  myData: 'Hello world!',
  myMethod: function () {
    console.log(this.myData);
  }
};

myObj.myMethod(); // --> Hello world!
```

## Function.prototype.bind

There is yet another way to set the `this` value. This can be done through the `bind` method that is avaiable on every function (although it has no effect on fat arrow functions).

To set the value of `this` you call the `bind` method with a single parameter, passing the value to be assigned to `this`. (The `bind` method accepts additional parameters, but their use is beyond the scope of this article. See the reference below for more information).

The `bind` method returns a new function for which the `this` value is fixed to the value specified in the `bind` parameter, as shown below.

```js
const myObj = {
  myData: 'Hello world!'
};

function printMyData() {
  console.log(this.myData);
}

const newFunction = printMyData.bind(myObj);
newFunction(); // --> Hello world!
```

Using the `printMyData` function as a basis, the `bind` method fixes the `this` value to `myObj` and returns a new function assigned here to the variable `newFunction`. When we call `newFunction` the `this` value will be `myObj`, and therefore we can console.log `myData` through the `this` keyword.

You will come across the `bind` method extensively in the HYF React module.

MDN: [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

## Fat arrow functions and 'this'

In fat arrow functions the value of `this` is unchanged from its enclosing scope. This makes fat arrow functions specifically useful as event handlers and callbacks when used in objects and ES classes where `this` is used.

In the example below we have defined a simple ES6 class which uses a `setTimeout` to console.log the `myData` value after one second. The callback passed as the first parameter of `setTimeout` is written as a fat arrow function. Hence, the `this` value inside the fat arrow function refers to the `this` value of the `sayDelayed` method. Because `sayDelayed` is called using object notation, the `this` value is set to the object itself. Thus, the expected result is printed.

Had we written the callback as a regular (anonymous) function, using the `function` keyword, this would have failed as its `this` value would have been set to `undefined`. Try it!

```js
class MyClass {

  constructor() {
    this.myData = 'Hello world'
  }

  sayDelayed() {
    setTimeout(() => {
      console.log(this.myData);
    }, 1000);
  }
}

const myClass = new MyClass();
myClass.sayDelayed();
```

Nevertheless, there are ways to use regular functions in this scenario as was the common case before fat arrow functions were introduced in ES6. One way is to use `bind` as in this example:

```js
class MyClass {

  constructor() {
    this.myData = 'Hello world'
  }

  sayDelayed() {
    setTimeout(function () {
      console.log(this.myData);
    }.bind(this), 1000);
  }
}

const myClass = new MyClass();
myClass.sayDelayed();
```

Another way is to introduce an intermediate variable, often named `self` or `that`, in a closure:

```js
class MyClass {

  constructor() {
    this.myData = 'Hello world'
  }

  sayDelayed() {
    const self = this;
    setTimeout(function () {
      console.log(self.myData);
    }, 1000);
  }
}

const myClass = new MyClass();
myClass.sayDelayed();
```