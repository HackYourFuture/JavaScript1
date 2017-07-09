# Closures

Below is a stripped down, simplified version of the closure example we used during the lecture.

```js
function greetPerson(name) {
    function innerFunction(greeting) {
        return greeting + ', ' + name;
    };
    return innerFunction;
}

const greetTimir = greetPerson('Timir');
const timirGreeting = greetTimir('Good morning');
console.log(timirGreeting);
```

The `greetPerson` function (the "outer" function) contains another function inside its function body, called `innerFunction`. This inner function has access to the `name` argument of `greetPerson`, as well as its own `greeting` argument.

When we call `greetPerson('Timir')`,  the `greetPerson` function sets its `name` argument to the string `'Timir'` and then returns its inner function. This inner function  **retains access to the `name` argument** and its value `'Timir'`, even after `greetPerson` exits. 

> Returning an inner function that accesses arguments and/or variables of its outer function creates (what we call) a **closure**.

The return value of `greetPerson` (i.e. the inner function) is subsequently assigned to the variable `greetTimir`.

With `greetTimir('Good morning')` we are now calling effectively calling the inner function, and passing it the string `'Good morning'`. The end result is that we print to the console the message:

```
Good morning, Timir
```

We could obtain the same result by scrapping all lines except the last two and replace them with the code below. We wouldn't be able to tell the difference from just looking at the output produced.

```js
function greetTimir(greeting) {
    const name = 'Timir';
    return greeting + ', ' + name;
}

const timirGreeting = greetTimir('Good morning');
console.log(timirGreeting);
```

But with that alternative `greetTimir` function we can only greet Timir. In contrast, with the `greetPerson` function we can easily produce functions to greet any person we like (or don't like :wink:), e.g.:

```js
const greetMaartje = greetPerson('Maartje');
const maartjeGreeting = greetMaartje('Hi there');
console.log(maartjeGreeting);

const greetHasan = greetPerson('Hasan');
const hasanGreeting = greetHasan('Have a good day');
console.log(hasanGreeting);
```

### Recommended further reading

[Eloquent JavaScript - Chapter 3: Functions](http://eloquentjavascript.net/03_functions.html) (Press Ctrl+F in your browser and search for the word 'closure')





