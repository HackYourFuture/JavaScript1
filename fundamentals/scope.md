# Scope

## What is scope?

Definition from [Dictionary.com](http://www.dictionary.com/browse/scope):

> noun
1\. extent or range of view, outlook, application, operation, effectiveness, etc.:

If you imagine yourself as the computer that is executing your JavaScript code, you can think of scope as meaning:

> what you can see from where your are

In this case the 'things' that you are looking for are variables and functions. When we say, "What's in scope?", we mean "Which variables and functions can be accessed from the current point of execution in your code?" As it happens, in JavaScript there are three types of scope to consider.

## Global scope

Variables and functions defined at global scope are visible from any point of execution in your code. Sometimes that's a good thing (or even essential), but more often it's bad. Let's dive right in.

```js
a = 10; // don't do this
console.log(a);
```

In this example we have assigned the value `10` to a variable that we forgot to declare (we forgot to use `let`, `const` or `var`). The JavaScript engine tries to be helpful and defines a variable `a` for us in **global** scope. More recently, the JavaScript community considered this friendliness to be a mistake and with ES5 introduced `strict` mode: place the string `'use strict';` at the top of your file.

```js
'use strict';
a = 10; // produces: ReferenceError: a is not defined
console.log(a);
```

You can correct this by declaring your variable with `var`:

```js
'use strict';
var a = 10;
console.log(a);
```

This still puts the variable `a` into the global scope. So why is global scope a problem? Because you cannot be sure that the variable names you choose do not conflict with names already present in global scope (global scope is a busy place). It is best to apply the principle of 'need to know'. Only expose your variables to other parts in the JavaScript ecosystem that need to know about them. This is where local scope and block scope come in.

## Local scope

When you declare a function in JavaScript the function body represents a new, local scope, distinct from global scope. Variables defined in the function body are visible only inside that function: from the outside, you can't look in.

```js
'use strict';

function myFunction() {
  const a = 10;
  console.log(a);
}

myFunction();

// console.log(a); <= this would produce: ReferenceError: a is not defined
```

But from the inside you can look out. In the example below the variable `b` is visible from inside the function body.

```js
'use strict';

const b = 'Hello';

function myFunction() {
  const a = 10;
  console.log(a);
  console.log(b);
}

myFunction();
```

You might think that the variable `b` is in global scope. Actually, variables declared with either `let` or `const` have block scope, as will be discussed next. Note however that the function `myFunction` still resides in global scope. There is a way to even get `myFunction` out of global scope by using, what is called, an **IIFE**. See further down below.

## Block scope

The keywords `let` and `const` were introduced in ES6 as alternative to the older `var` keyword and we recommend that you use these newer keywords instead of `var`. They adhere to the rules for block scope, whereas `var` is completely oblivious of the concept.

A new block scope (sometimes called _lexical_ scope) is created whenever you create a block of code inside a pair of curly braces. Variables defined with `let` and `const` at the file level (i.e., not inside a function) are considered to be in a (file-level) block scope. That's why the variable `b` in the previous code snippet is not in global scope. Had we replaced `const b` with `var b` then variable `b` _would be_ in global scope.

## Guidance

Following the principle of 'need to know', it is best to define variables at the point of need, i.e. just before you need to access these variables. This will either be in the same scope of the code where you access the variable, or, in case you need to access the variable from multiple places, the closest scope that is common to the points of need.

Sometimes however, you cannot avoid global scope. This is for instance the case when you want to access the [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM) in the browser. As you will learn, you can create an HTML element (e.g. an `h1` element) in JavaScript using this code:

```js
const h1 = document.createElement('h1');
```

The `document` object resides in global scope, conveniently provided there by the browser for access by any piece of JavaScript that needs to manipulate the DOM.

## IFFE

We were left with the issue that functions defined at the file level still end up in global scope. The traditional method of solving this in JavaScript is to use an Immediately Invoked Function Expression (IIFE). We present it here for info. When you build web applications with modern tools such as React and Node, you do not need to use IFFEs.

To use an IFFE you must wrap all of your JavaScript code in a function body of an anonymous function (i.e., a function with no name) and immediately call that function (as indicated by the empty set of parentheses on the last line). This creates a local scope for your code. Now even the `myFunction` function is in local scope.

```js
(function () {
  'use strict';

  const b = 'Hello';

  function myFunction() {
    const a = 10;
    console.log(a);
    console.log(b);
  }

  myFunction();
})();
```

More info on MDN: [IFFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

