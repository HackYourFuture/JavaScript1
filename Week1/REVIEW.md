# REVIEW JavaScript Basics

## Variables

A "variable" is a place where you can store information, such as a string, or a number. New variables in JavaScript are declared using one of three keywords: let, const, or var.

### Variable declaration

Variables are "declared" using the `var`, `let` or `const` keyword:

```js
var x;
let foo;
const bar;
```

### let and const
- read about [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- read about [const](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Statements/const)
- [let vs const] (http://wesbos.com/let-vs-const/)

>TODO - reconsider resources. 

Here, we say: "declare variable x and initialize it with the integer (number) 5".

```js
let foo;  // declare variable `foo`
let foo = 6; // declare and assign a variable at the same time
```

You can also assign a value to an existing variable:
```js
foo = 4;  // change variable `foo`

```


Basic Data types [Strings, Numbers, Arrays]

## Variable types

All variables have a type. In our example above, the variable `x` is a `number`. JavaScript supports the following types:

* `string`, e.g. "HackYourFuture"
* `number`, e.g. 5, or 10.6
* `boolean`, e.g. `true` or `false`
* `array`\*, e.g. `[1, 2, 3]` or `['what', 'is', 'your', 'name']`
* `object`, e.g. `{name: 'John', age: 24}`, or the special object `null`
* `function`, e.g. `function () { return 4; }`
* `symbol`

In addition, a variable may be `undefined`. This is also a special type.

To get the type of a variable, use the following code:

```js
var x = 5;
var typeOfX = typeof x; // -> "number"
```

Note that I've put an asterisk behind 'array'. That is because in JavaScript, array is a special kind of object:

```js
var arr = [1, 2, 3];
var typeOfArr = typeof arr; // -> "object"
```

However, in our communication, we will call these variables arrays.

### Null & undefined

The values `null` and `undefined` are very similar in JavaScript, but they behave a bit differently. The difference is that `null` always has type "object", and `undefined` always has type "undefined".

Whenever you declare a variable, but you don't set a value, the variable will become `undefined`. JavaScript will never make a variable `null` unless you explicitly program it.

```js
var x;
console.log(typeof x); // -> "undefined"
```


## Arrays

Variables that are arrays contain a list of things, instead of just one thing. What's inside the array, we typically call "elements". So, the array `[1, 2, 3]` has three elements. The array `[]` has no elements and is therefore empty. The number of elements in an array is called its "length".

When you want to access an element inside an array, you use an "index". This is the number that you put between brackets (`[]`).

Given the following code:

```js
var arr = ['john', 'jane', 'jack'];
console.log(arr[0]);
```

The number `0` is the "index of the first element of array `arr`". Conversely, the element "at index 0 in array `arr` is `'john'`".

Instead of a number, you can also use a variable to access elements in an array, *as long as this variable is a number*:

```js
var arr = ['john', 'jane', 'jack'];
var a = 1;
console.log(arr[a]); // -> jane
```

If the index you use is not an integer (a whole number), or if it's less than `0` or if it's greater than or equal to the array's length, you will get back `undefined`.


