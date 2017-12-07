# Functions

A function is a reusable piece of code. Functions are *very* important in JavaScript, to the extent that some people call JavaScript a "function-oriented" language. As mentioned above, variables can be of type function. In fact, *every function is a variable*.

The following two pieces of code have the exact same result:

```js
function sum(a, b) {
  return a + b;
}
```

and

```js
let sum = function (a, b) {
  return a + b;
}
```

> Note
>
> This is not entirely true, as in the second code, the function is "anonymous", i.e. it has no name. But in both cases, you can call the function like this: `sum(4, 5)`.

## Parameters & arguments

When writing `function sum(a, b)`, `a` and `b` are the "parameters" of the function. We say that this function has two parameters. (Sometimes, you'll see the word "arity": this function has "arity" 2, but that is something you don't have to use for now.)

Now, when *calling* function sum, e.g. `var s = sum(4, 5);`, we say that the numbers `4` and `5` are the "arguments" of the function. Arguments are "passed" to the function: "we pass `4` and `5` to the function `sum`".

So remember the difference between the word "parameter" and "argument". Many people confuse them, and that's not a big problem, but understanding the difference is always nice:

* A parameter is the name you want to give to the variable that is available inside of the function.
* An argument is the actual value you want to assign to the parameters when you call the function.

A function that "has two parameters" is also said to "take/accept two arguments". But, sometimes you'll hear people say: "the function has two arguments" or "the function takes two parameters". While formally incorrect, you'll know what they mean.

## Calling a function on something

In JavaScript, you can call functions *on* something. By this, we mean that you use the dot to call the function. For instance, when we say "call method `trim` on string `s`", we mean:

```js
let s = " this is a string  ";
s.trim(); // -> "this is a string"
```

> Note
>
> Technically, this means that the string `s` will become the `this` special variable inside of the function.

However, there are functions that you don't call on anything:

```js
function sum(a, b) { return a + b; }
sum(4, 5); // -> 9
```

Here, you call the function `sum` on nothing.

Most built-in functions in JavaScript, like math functions or logging functions, also use the dot:

```js
Math.round(4.5);
console.log("hello");
Array.from([1, 2, 3]);
```

Indeed, these functions are also called "on" `Math`, `console`, `Array`, and so on. However, in this case, their purpose is more to group them logically, so here it's not very important to use that terminology. We'd rather say: "call the function `Math.round` with `4.5` as an argument", i.e. we include it in the full name of the methods.

It's more when you think about which functions you can call "on" your own variables (strings, arrays, numbers, etc):

```js
myString.trim();
myArray.slice();
myNumber.toString();
...
```

