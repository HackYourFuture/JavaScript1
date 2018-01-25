# Conditional execution

The normal order of execution of statements in a computer program is in straight-line order, from top to bottom. However, sometimes it is desirable to execute one or more statements _conditionally_, i.e. depending on whether some condition – determined by the state of your program – holds true.

## The `if` statement

In its simplest form the `if` statement looks like this:

```js
if (condition) {
    // one or more statements that will be executed
    // if, and only if the condition holds true
}
```

Here, `condition` is a boolean expression that resolves to either `true` or `false` (or, more precisely, any expression that is 'truthy' or 'falsy', as will be explained later).

The statements within the curly braces `{` and `}` will be executed if the condition holds true, otherwise these statements will be skipped (i.e. ignored).

An example:

```js
if (distance < 10) {
    console.log('I will take the bike.');
}
```

Here, the condition is the boolean expression `distance > 10`, which is either `true` or `false`.

It is also possible to add a statement block to be executed if (and only if) the condition does **not** hold true, using an `else` clause.

```js
if (distance < 10) {
    console.log('I will take the bike.');
} else {
    console.log('I will go by car.');
}
```

A condition can take more complex forms, using `&&` (logical AND) and `||` (logical OR) operators:

```js
if (distance < 10 && !raining) {
    console.log('I will take the bike.');
} else {
    console.log('I will go by car.');
}
```

In the example above `raining` is a boolean variable (either `true` or `false`), and the exclamation mark is the logical NOT operator that negates the boolean value (if it was `true` the result after negation is false and vice versa).

For more complex decisions you can concatenate multiple conditions using `else if` clauses.

```js
if (distance < 1) {
    console.log('I will walk.');
} else if (distance < 10) {
    console.log('I will take the bike.');
} else if (distance < 50) {
    console.log('I will go by car.');
} else {
    console.log('I will take the train.');
}
```

The statement block inside an `if`, `else` or `else if` may itself contain nested `if` statements, as in this example:

```js
if (distance < 10) {
    if (raining) {
        console.log('I will go public transportation.');
    } else {
        console.log('I will walk.');
    }
} else {
    console.log('I will go by car.');
}
```

> As (nested) `if` statements can become quite complex it is very important that you indent your source code so that there can be no confusion about which statement blocks are executed for each condition, as was done in the examples.

>More information on MDN: [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

## The conditional (ternary) operator

This operator can be used as a shortcut for an `if` statement when dealing with expressions.

The general format is:

```js
condition ? expr1 : expr2
```

('ternary' means: _composed of three parts_)

It is often used in combination with an assignment, as in this example:

```js
const conditionOfCar = age < 1 ? 'new' : 'used';
```

The `conditionOfCar` variable will be assigned the string `'new'` if the `age < 1` condition holds true, otherwise it is assigned the string `'used'`.

It is always possible to rewrite a ternary operator as an `if-then-else` statement, for example:

```js
let conditionOfCar;
if (age < 1) {
  conditionOfCar = 'new';
} else {
  conditionOfCar = 'used';
}
```

Note that you can't use `const` here for `conditionOfCar` because we can't combine declaration and initialization in a single statement. Therefore we must now use `let`.

It is **not** recommended to use the conditional operator if you do not intend to use its value:

```js
// Don't do this: it's yucky code
age < 1 ? console.log('new') : console.log('used');
```

>More information on MDN: [Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## The switch statement

The `switch` statement can sometimes be a useful alternative to a concatenation of `if` statements. This is the case when the condition is an expression that can be decomposed into a number of distinct values or _cases_, as shown in the example below.

```js
const hyfModule = 'JavaScript-1';

switch (hyfModule) {
  case 'HTML/CSS':
    console.log('In this module you will learn HTML and CSS.');
    break;
  case 'JavaScript-1':
    console.log('In this module you will learn Git and JavaScript basics.');
    break;
  case 'JavaScript-2':
    console.log('In this module you will learn about JavaScript in the browser with HTML and CSS.');
    break;
  case 'JavaScript-3':
    console.log('In this module you will learn about Async and API calls.');
    break;
  case 'Node':
    console.log('This module is about building server and CLI applications using Node.');
    break;
  case 'Database':
    console.log('In this module is about Relational and Non-Relational Data and Database Systems.');
    break;
  case 'React':
    console.log('In this module you will to build Single Page Applications using React.');
    break;
  case 'Project':
    console.log('In this final module you will do your graduation project.');
    break;
  default:
    console.log('This module is unknown: ' + hyfModule);
}}
```

Depending on the value of the expression specified in the `switch` clause, one of the `case` statement blocks is executed. Each statement block should end with a `break` statement to ensure that a `case` doesn't 'fall through' into the next `case`.

The `default` statement at the end is executed when none of the preceding cases hold true. The `default` statement is not strictly required, but is a best practice to always specify one.

>More information on MDN: [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

## truthy, falsy

**truthy**: 'sort of' `true`
**falsy**: 'sort of' `false`

From MDN:

In JavaScript, a **truthy** value is a value that is considered  true when evaluated in a Boolean context. All values are truthy unless they are defined as **falsy**.

**falsy** values are:

- `false`
- `0`
- `""`
- `null`
- `undefined`
- `NaN`

The example below will print `x is undefined` because `undefined` is **falsy**.

```js
let x;
if (x) {
    console.log('x is defined');
} else {
  console.log('x is undefined');
}
```

>More information on MDN: [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy), [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)