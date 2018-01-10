# Statements & expressions

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

This equals `9`, but what is JavaScript to do with it? It doesn't provide a command. You'd need to do something with it, e.g. `let x = 4 + 5;` or `callFunction(4 + 5)`. We call these parts of statements "expressions". Expressions are not terminated by semicolons. Expressions always "evaluate into a value". In our example, the expression `4 + 5` "evaluates into `9`". If expressions cannot be evaluated into a value, they are invalid. For instance, `4 +` is not a valid expression, it is incomplete, because we need something else after the plus sign.

So, statements can *contain* expressions. Can expressions contain statements? No, they cannot. However, they can themselves contain expressions. Think about `4 + 5`: it contains the expressions `4` and `5`, as these both evaluate into a value: the expression `4` evaluates into the number `4`, it is a very simple expression. Similarly, `true`, `null`, `undefined` are all expressions.

## Examples of expressions

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

## Examples of not-expressions

The following are not expressions:

* `let` -> this is a keyword, see below
* `let x;` -> this is a statement
* `+` -> this is only an operator
* `if (a > 4) { return "yes"; } else { return "no"; }`

`if` is also a statement. However, it is quite a complex statement. It is also referred to as a "construct", just like `for`, `while`, `try`, etc.

