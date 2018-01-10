# Objects

Variables that are objects also contain a list of things, but instead of them being in some specific order, they can be assigned to words, called "keys". Instead of "elements" the things that are inside objects are called "properties".


```js
let obj = {name: 'John', age: 24};
```

This object has two properties: `name` and `age`. The "value" of the property `name` is the string `'John'`. The "value" of the property `age` is the number `24`.

When accessing object properties, you can use the dot-notation: `obj.name` or the bracket-notation: `obj["name"]`. Note that the latter looks a lot like the way to access array elements. However, here what's inside the bracket (called "key" for objects, instead of "index") must be a string.

```js
console.log(obj.name); // -> 'John'
console.log(obj['name']); // -> 'John'
```

Just like with arrays, you can also use a variable to access properties, as long as these variables are strings. In this case you cannot use the dot-notation!

```js
const ageKey = 'age';
console.log(obj[ageKey]); // -> 24
```

Remember that there is a very big difference between `obj[name]` and `obj["name"]`.

> Note:
>
> Thinking back of arrays, the length of an array can be retrieved by `arr.length`. So as mentioned before, arrays are just like other JavaScript objects. You could even write `arr['length']` to access the `length` property of the array. JavaScript will look: is what we put between brackets a number? Then it is an index and we'll look up the correct array element. If it's a string, it's a key and we will look up the corresponding property.
