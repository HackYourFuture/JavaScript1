# HackYourFuture

HYF JavaScript 1 / Week 2 classwork

## Topics

• Simple Data Types Recap

• Arrays

• Objects

• Operators

• Functions(basics)

### Simple Data Types Recap

JavaScript has following simple data types or also known as _primitive_ types.

- boolean

- null

- undefined

- number

- string

- symbol

MDN defines a [primitive type](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) as data type that has no methods or properties. This means that a string created like below doesn't have any methods or properties attached to it.

```JavaScript
const str1 = "Wait, what?";
const str2 = "If I don't have any properties how do I get length using str1.length?";
const str3 = "JavaScript is crazy. I want to go home and scream!!";
```

Let's take a deep breath and try to understand what is happening.

1. Apart from `null` and `undefined`, each primitive type(`string`, `number` and `boolean`) has a corresponding wrapper object. Find more info about it [here](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/String), [here](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Number) and [here](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Boolean). This means, I can also create a string in JavaScript like below:

    ```JavaScript
    const str1 = new String('Hello World');
    // and is equivalent to
    const str2 = 'Hello World';
    ```

2. JavaScript as a language is weakly typed. This means that whenever your code wants to perform an operation with invalid datatypes(such as find length of a primitive string), JavaScript will try to find a best match for this scenario. This mechanism is also called, as mentioned above, **coercion**.

This is why when we try to find length of a primitive string like below

```JavaScript
const str = 'Hello World';
console.log(str.length);
```

JavaScript will try to do a coercian between primitives and objects. In this case, the primitive string is coerced to the string object in order to access its length property. Type coercian can happens other way round as well. For example, in the below snippet, string objects are coerced to primitives to concatenate them.

```JavaScript
const str1 = new String('Hello ');
const str2 = new String('World');
const str3 = str1 + str2;

console.log(str3);
```

#### Important

All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered. For example,

```JavaScript
let str = 'Hello World';
console.log(str); // Hello World
str.toUpperCase();
console.log(str); // Hello World

str = str.toUpperCase();
console.log(str); // HELLO WORLD
```

### Arrays

Arrays are one of the complex data types in JavaScript which represent a collection of values(could be both simple or complex or a combination of both).

- How do we create an array?

    ```JavaScript
    const arr1 = [1,2,3,4];
    const arr2 = new Array();
    ```

    However, it isn't recommended to use the second approach while creating arrays. This is because it has a lot of caveats. For example,

    ```JavaScript
    const arr1 = new Array(); // []
    const arr2 = new Array('a','b'); // ['a','b']
    const arr3 = new Array(20); // empty array of 20 items
    const arr4 = new Array(20, 21); // [20,21]
    ```

- Array index and length?

    We can access a particular element of an array using the following approach.

    ```JavaScript
    const arr1 = ['a','b','c','d','e'];
    arr1[0]; // 'a'
    arr1[1]; // 'b'
    arr1[2]; // 'c'
    arr1[3]; // 'd'
    arr1[4]; // 'e'
    ```

    and can find out the length of an array using `arr1.length` property.

- Commonly used array methods

    - [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - add items to the end of an array

        ```JavaScript
        const arr = ['one','two','three'];
        arr.push('four');
        console.log(arr);  // ['one','two','three','four']
        arr.push('five', 'six');
        console.log(arr);  // ['one','two','three','four','five','six']
        ```

    - [unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - add items to the beginning of an array

        ```JavaScript
        const arr = [1,2,3,4];
        arr.unshift(5);
        console.log(arr);  // [5,1,2,3,4]
        arr.unshift(6,7);
        console.log(arr);  // [6,7,5,1,2,3,4]
        ```

    - [shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - remove items from the beginning of an array

        ```JavaScript
        const arr = [1,2,3,4];
        arr.shift();
        console.log(arr) // [2,3,4]
        ```

    - [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) - remove items from the end of an array

        ```JavaScript
        const arr = [1,2,3,4];
        arr.pop();
        console.log(arr) // [1,2,3]
        ```

    - [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - remove or replace elements from an array

        ```JavaScript
        // const spliceExample = array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);
        const months = ['Jan', 'March', 'April', 'May'];
        months.splice(1,1);
        console.log(months); // ['Jan', 'April', 'May']

        months.splice(2,1,'June');
        console.log(months); // ['Jan', 'April', 'June']
        ```

### Objects

An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods). Properties and methods exist as key:value pairs. For example, a `person` could be considered as an object with properties such as `name`, `age`, `dateOfBirth` etc.

```JavaScript
// An empty object
const obj = {};

const person = {
  name: 'Yash Kapila',
  age: 29,
  gender: 'M',
  greeting() { console.log('Hello World'); }
};
```

Similar to accessing an array's _elements_ using `index`, we can access _properties_ of an object. There are two ways of accessing properties of an object.

1. dot notation(`object.property`)

    ```JavaScript
    // While using the dot notation, `name` should be a valid key inside `person` object

    console.log(person.name); // Yash Kapila
    console.log(person.noproperty); // undefined
    ```

2. bracket notation(`object['property']`)

    ```JavaScript
    // While using brackets notation, `'name'` should be EVALUATED to a valid key inside `person` object

    console.log(person['name']); // Yash Kapila
    console.log(person['noproperty']); // undefined

    // Or a variable could be used to refer to a key inside the `person` object
    const key = 'name';
    console.log(person[key]); // Yash Kapila; `key` here EVALUATES to `name` which is a valid key in person
    ```

### Operators

- https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/operators.md
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

### Functions(basics)

- https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/functions.md
