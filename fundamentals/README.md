# Understanding JavaScript fundamentals

When talking about JavaScript, it is important that you use the correct terminology. This way, if you talk about code with others, they'll understand what you mean without any ambiguity.

## Variables

A "variable" is a place where you can store information, such as a string, or a number.

### Variable declaration

Variables are "declared" using the `var` keyword:

```js
var x = 5;
```

Here, we say: "declare variable x and initialize it with the number 5".

### Variable types

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



## Objects

Variables that are objects also contain a list of things, but instead of them being in some specific order, they can be assigned to words, called "keys". Instead of "elements" the things that are inside objects are called "properties".


```js
var obj = {name: 'John', age: 24};
```

This object has two properties: `name` and `age`. The "value" of the property `name` is the string `'John'`. The "value" of the property `age` is the number `24`.

When accessing object properties, you can use the dot-notation: `obj.name` or the bracket-notation: `obj["name"]`. Note that the latter looks a lot like the way to access array elements. However, here what's inside the bracket (called "key" for objects, instead of "index") must be a string.

```js
console.log(obj.name); // -> 'John'
console.log(obj['name']); // -> 'John'
```

Just like with arrays, you can also use a variable to access properties, as long as these variables are strings. In this case you cannot use the dot-notation!

```js
var ageKey = 'age';
console.log(obj[ageKey]); // -> 24
```

Remember that there is a very big difference between `obj[name]` and `obj["name"]`.

> Note:
>
> Thinking back of arrays, the length of an array can be retrieved by `arr.length`. So as mentioned before, arrays are just like other JavaScript objects. You could even write `arr['length']` to access the `length` property of the array. JavaScript will look: is what we put between brackets a number? Then it is an index and we'll look up the correct array element. If it's a string, it's a key and we will look up the corresponding property.


## Functions



## Statements & expressions




