# Values

Values are the "things" that you assign to a variable. All values have a type. In our example above, the variable `x` is assigned a value of type `number`. JavaScript supports the following types:

* `string`, e.g. "HackYourFuture"
* `number`, e.g. 5, or 10.6
* `boolean`, e.g. `true` or `false`
* `array`\*, e.g. `[1, 2, 3]` or `['what', 'is', 'your', 'name']`
* `object`, e.g. `{name: 'John', age: 24}`, or the special object `null`
* `function`, e.g. `function () { return 4; }`
* `symbol`
* `undefined`

If you declare a variable without specifying its value, then, by default its value is `undefined`.

To get the type of a value assigned to a variable, use the following code:

```js
let x = 5;
let typeOfX = typeof x; // -> 'number'
```

Note that I've put an asterisk behind 'array'. That is because in JavaScript, array is a special kind of object:

```js
let arr = [1, 2, 3];
let typeOfArr = typeof arr; // -> 'object'
```

However, in practice we will call these variables arrays.

## Null and undefined

The values `null` and `undefined` are very similar in JavaScript, but they behave a bit differently. The difference is that `null` always has type `'object'`, and `undefined` always has type `'undefined'`.

Whenever you declare a variable, but you don't set a value, the variable will become `undefined`. JavaScript will never make a variable `null` unless you explicitly assign it the value `null`.

```js
let x;
console.log(typeof x); // -> 'undefined'
```


## `typeof` operator

You can use the `typeof` operator to get the type of a certain variable as you have seen in the above section 'Value types'. As you can see in the following examples it returns the type of value that you have assigned to your variable.

## Strings

In JavaScript you can assign a series of characters to a variable, you then call this a string. You can use all sorts of characters (text/numbers, spaces or phrases) in strings. By using the `''` you define that something is a string. You can also use `""` to create a string. Both are fine as long as you are consistent (just make a choice on which one you prefer and stick to it).

```js
let foo = '42';
typeof foo   //-> 'string'

let bar = 'I\'m 99 years old ';
typeof bar   //-> 'string'
```

### String indexes and string properties

Individual characters in a string can be accessed by their position (index) within the string. The index of a string always starts at 0.
Strings also have properties, for example `.length` you can use this to find the length of a string.

So for example:
```js
let baz = 'Hello World';
baz[0]; //-> "H"
baz.length; //-> 11
```

### String methods

String methods are named operations that you can use on string values to create new values. For example, the `toUpperCase` method creates a new string with all uppercase letters.

```js
let baz = 'Hello World!';
baz.toUpperCase(); // -> 'HELLO WORLD'
```

Methods differ from properties (such as `.length`) in that you must always use them with open and close parentheses `(` and `)`.

Some methods need additional information, and you must supply it in the form of one or more _parameters_. For example:

```js
let baz = 'Hello World!';
baz.slice(3, 8) // -> 'lo Wo'
baz.startsWith('He') // -> true
baz.indexOf('World') // -> 6
```

## Numbers

All numbers in JavaScript are considered numbers, either with or without a decimal.

```js
let quux = 42;
typeof quux  //-> 'number'

let quuux = 3.3333;
typeof quuux //-> 'number'

```


## Arrays

Arrays are values that contain a list of things, instead of just one thing. What's inside the array, we typically call "elements". So, the array `[1, 2, 3]` has three elements. The array `[]` has no elements and is therefore empty. The number of elements in an array is called its "length".

When you want to access an element inside an array, you use an "index". This is the number that you put between brackets (`[]`).

Given the following code:

```js
let arr = ['john', 'jane', 'jack'];
console.log(arr[0]);
```

The number `0` is the "index of the first element of array `arr`". Conversely, the element "at index 0 in array `arr` is `'john'`".

Instead of a number, you can also use a variable to access elements in an array, *as long as this variable is a number*:

```js
let arr = ['john', 'jane', 'jack'];
let a = 1;
console.log(arr[a]); // -> jane
```

If the index you use is not an integer (a whole number), or if it's less than `0` or if it's greater than or equal to the array's length, you will get back `undefined`.

More about [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
