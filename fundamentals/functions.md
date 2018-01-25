# Functions

Consider this **function** from [high-school math](https://www.mathplanet.com/education/algebra-2/how-to-graph-functions-and-linear-equations/functions-and-linear-equations):

> 𝑓(x) = x + 7
>
> _if x = 2 then_
>
> 𝑓(2) = 2 + 7 = 9

The value of the function 𝑓(x) is dependent on the value you supply for its argument x. (Instead of the term 'argument', sometimes the word 'parameter' is used). 

Here is the equivalent JavaScript function:

```js
// function definition
function f(x) {
    return x + 7;
}

// call the function and log its value for x = 2
console.log(f(2));  // -> 9
```

This function adds 7 to the value of its argument. Whenever we need to add 7 to some number we can reuse this same function over and over again.

During execution, the value of x in the function body (the part between the curly braces) is substituted with the value 'passed' during the function call. 

A function thus is a reusable piece of code (see _Why Use Functions_ below). Functions are *very* important in JavaScript, to the extent that some people call JavaScript a "function-oriented" language. As mentioned above, variables can be of type function. In fact, *every function is a variable*.

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

Now, when *calling* function sum, e.g. `let s = sum(4, 5);`, we say that the numbers `4` and `5` are the "arguments" of the function. Arguments are "passed" to the function: "we pass `4` and `5` to the function `sum`".

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

## Why Use Functions?

> The following was adapted from https://www.cs.utah.edu/~zachary/computing/lessons/uces-10/uces-10/node11.html

The first reason is **reusability**. Once a function is defined, it can be used over and over and over again. You can invoke the same function many times in your program, which saves you work.

Another aspect of reusability is that a single function can be used in several different (and separate) programs. When you need to write a new program, you can go back to your old programs, find the functions you need, and reuse those functions in your new program. You can also reuse functions that somebody else has written for you.

The second reason is **abstraction**. In order to use a particular function you need to know the following things:

1. The name of the function;
2. What the function does;
3. What arguments you must give to the function; and
4. What kind of result the function returns.

But notice: If you just want to use the function in your program, you don't have to know how it works inside! You don't have to understand anything about what goes on inside the function.

It's sort of like driving a car or using a telephone. With an automobile, you don't need to understand every detail about the engine and drive train and wheels, if all you want to do is drive the car. Similarly, with a telephone, you don't have to understand everything about the phone system in order to make a call.

The only time you need to know how a function works inside is when you need to write the function, or change how it works. (It's like a car again; you need to know how a car works in order to build one or fix one.) But once a function is written and working, you never need to look at its insides again.

Together, these two reasons make functions extremely useful--practically essential!-for programmers who write large programs. The ability to divide a program into abstract, reusable pieces is what makes it possible to write large programs that actually work right.