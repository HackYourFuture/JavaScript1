# REVIEW JavaScript week 2

## Statements & expressions

Most programming languages that you'll encounter in real life are called "imperative" programming languages. JavaScript is such an imperative programming language. Imperative is another word for command-like. That is, you give the computer a bunch of commands after each other. First do this, then do that, etc.

These individual commands are called "statements" in imperative programming languages. You can compare them with sentences in the English language. They have a use by themselves, and do not need something else. "The man eats bread." is a full sentence, it conveys a meaning by itself. A sentence in English is always terminated by a period.

Similarly, a statement in JavaScript should provide a command by itself. JavaScript-statements are (almost always) terminated by a semicolon.

This is a complete statement:

```js
let s = "HackYourFuture";
```

It is a full command: declare a variable `s` and initialize it with `"HackYourFuture"`. JavaScript doesn't need any other information to know what we want. The statement is terminated with a semicolon.

However, this is not a complete statement:

```js
4 + 5
```

This equals `9`, but what is JavaScript to do with it? It doesn't provide a command. You'd need to do something with it, e.g. `var x = 4 + 5;` or `callFunction(4 + 5)`. We call these parts of statements "expressions". Expressions are not terminated by semicolons. Expressions always "evaluate into a value". In our example, the expression `4 + 5` "evaluates into `9`". If expressions cannot be evaluated into a value, they are invalid. For instance, `4 +` is not a valid expression, it is incomplete, because we need something else after the plus sign.

So, statements can *contain* expressions. Can expressions contain statements? No, they cannot. However, they can themselves contain expressions. Think about `4 + 5`: it contains the expressions `4` and `5`, as these both evaluate into a value: the expression `4` evaluates into the number `4`, it is a very simple expression. Similarly, `true`, `null`, `undefined` are all expressions.

### Examples of expressions

Here are some examples of expressions. Remember: expressions evaluate into a value, but do not provide a command:

* `sum(a, b)`
* `a`
* `a > 4 ? "yes" : "no"`
* `a + b`
* `a && b || c`
* `arr.length`
* `obj["name"]`
* `[1, 2, 3]`
* `arr[1]`
* `[1]` (this is an array with one element!)
* `function a() { return 4; }`

The last one requires a bit of explanation. If you write:

```js
function a() { return 4; }
```

by itself, this is a *statement* (a function declaration statement). However, if you write it as part of a statement, such as:

```js
let b = function a() { return 4; }
```

now it is an expression. This is an exceptional situation where something can be a statement or an expression.

### Examples of not-expressions

The following are not expressions:

* `var` -> this is a keyword, see below
* `var x;` -> this is a statement
* `+` -> this is only an operator
* `if (a > 4) { return "yes"; } else { return "no"; }`

`if` is also a statement. However, it is quite a complex statement. It is also referred to as a "construct", just like `for`, `while`, `try`, etc.

## Functions

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

### Parameters & arguments

When writing `function sum(a, b)`, `a` and `b` are the "parameters" of the function. We say that this function has two parameters. (Sometimes, you'll see the word "arity": this function has "arity" 2, but that is something you don't have to use for now.)

Now, when *calling* function sum, e.g. `var s = sum(4, 5);`, we say that the numbers `4` and `5` are the "arguments" of the function. Arguments are "passed" to the function: "we pass `4` and `5` to the function `sum`".

So remember the difference between the word "parameter" and "argument". Many people confuse them, and that's not a big problem, but understanding the difference is always nice:

* A parameter is the name you want to give to the variable that is available inside of the function.
* An argument is the actual value you want to assign to the parameters when you call the function.

A function that "has two parameters" is also said to "take/accept two arguments". But, sometimes you'll hear people say: "the function has two arguments" or "the function takes two parameters". While formally incorrect, you'll know what they mean.

### Calling a function on something

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
