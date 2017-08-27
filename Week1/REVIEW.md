# REVIEW JavaScript Basics week 1

## CLI
>pwd : present working directory
ls : List files in the directory
cd : change the directory
touch: Create an empty file
echo : display the string
echo -n : Display the string without newline
echo “something” > file : Redirect the output of echo and create file
echo “another thing” >> file : Append the string to the file
mkdir: make a new directory
cd ~ : home
cd - : previous directory
cd .. : parent directory
ls -a : List all files including hidden files
cd / : change to the root directory
cat : Concatenate the file line by line and display it on the terminal
less: Print the big file line by line
vim <file> : open the editor with <file> {a: to go to the insert mode, <ESC>:wq  to write and quit }
for var in {START..END}; do <COMMAND1>; <COMMAND2>;..; ; done
head <file>: display the first 10 lines of file
tail <file>: display the last 10 lines of file
head -n <file> : display first n lines of file
tail -n <file> : display last n lines of file
man <COMMAND> : Display manual of the COMMAND

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
let x = 5;
let typeOfX = typeof x; // -> "number"
```

Note that I've put an asterisk behind 'array'. That is because in JavaScript, array is a special kind of object:

```js
let arr = [1, 2, 3];
let typeOfArr = typeof arr; // -> "object"
```

However, in our communication, we will call these variables arrays.

### Null & undefined

The values `null` and `undefined` are very similar in JavaScript, but they behave a bit differently. The difference is that `null` always has type "object", and `undefined` always has type "undefined".

Whenever you declare a variable, but you don't set a value, the variable will become `undefined`. JavaScript will never make a variable `null` unless you explicitly program it.

```js
let x;
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
let arr = ['john', 'jane', 'jack'];
let a = 1;
console.log(arr[a]); // -> jane
```

If the index you use is not an integer (a whole number), or if it's less than `0` or if it's greater than or equal to the array's length, you will get back `undefined`.


### 2.3 Basic operators

>Note the two different uses of the equals sign:
A single equals sign (=) is used to assign a value to a variable.
A triple equals sign (===) is used to compare two values (see Equality Operators).

### 2.5 Operator precedence

There are compound assignment operators such as +=. The following two assignments are equivalent:

```js
x += 1;
x = x + 1;
```


