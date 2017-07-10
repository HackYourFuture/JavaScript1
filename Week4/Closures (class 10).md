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

When we later call `greetPerson('Timir')`,  the `greetPerson` function sets its `name` argument to the string `'Timir'` and returns its inner function. This inner function  **retains access to the `name` argument** and its value `'Timir'`, even after `greetPerson` exits. Note that `greetPerson` doesn't call its inner function; it just returns it.

The returned the inner function is subsequently assigned to the variable `greetTimir`.

> Returning an inner function that accesses arguments and/or variables of its outer function creates (what we call) a **closure**.

With `greetTimir('Good morning')` we are effectively calling the inner function, passing it the string `'Good morning'`. Because the inner function still has acces to `name` it can produce the output as printed by the `console.log`:

```
Good morning, Timir
```

Alternatively, we could have obtained the same result by scrapping all lines except the last two and replace them with an equivalent `greetTimir` function as shown below. We wouldn't be able to tell the difference from just looking at the output produced.

```js
function greetTimir(greeting) {
    const name = 'Timir';
    return greeting + ', ' + name;
}

const timirGreeting = greetTimir('Good morning');
console.log(timirGreeting);
```

However, with that alternative `greetTimir` we can only greet Timir. In contrast, with `greetPerson` we can easily produce functions to greet any person we like (or don't like :wink:), e.g.:

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





