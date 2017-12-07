# Variables

A "variable" is a place where you can store information, such as a string, or a number. A variable has a _name_ (that you choose) and a _value_. New variables in JavaScript are declared using one of three keywords: `let`, `const`, or `var`.

> Think of variables names like **labels** on boxes, while the value of the variable are the **contents** of the box - you could change the contents of a box and leave the label intact, the contents of the boxes can have different types, the boxes should have good labels (a box of books being labeled pens would be very confusing),
>
![Variables are like boxes](./assets/box.png)
> Photo from [Khan Academy](http://cs-blog.khanacademy.org/2013/09/teaching-variables-analogies-and.html)


## Variable declaration

Variables are "declared" using the `var`, `let` or `const` keyword. In the following example three variables are declared with the names `x`, `foo` and `bar`.

```js
var x;
let foo;
const bar;
```

Note that the chosen names in this example are meaningless (perhaps with the exception of `x`, for instance as part of a mathematical program). You should make an effort to always choose names that best describe what you intend this variable to hold.

## var

Prior to JavaScript ES6 the `var` keyword was the only way to declare a variable. ES6 introduced two new keywords, `let` and `const` for declaring variables. They improve on how the older `var` declaration works (this involves the concept of "scope" that you will learn about in the third lecture). In HackYourFuture we encourage you to use the more modern `let` and `const` keywords over `var`, but you will often come across `var` in existing books, software libraries and examples on the Internet, so you should understand `var` too.

## let and const
- read about [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- read about [const](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Statements/const)
- [let vs const] (http://wesbos.com/let-vs-const/)

Here, we say: "declare variable x and initialize it with the integer (number) 6".

```js
let foo;  // declare variable `foo`
```

```js
let foo = 6; // declare and assign a variable at the same time
```

You can also assign a value to an existing variable:
```js
foo = 4;  // change variable `foo`
```

