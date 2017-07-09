# Closures

Below is a stripped down, simplified version of the closure example we used during the lecture.

<script src="https://gist.github.com/remarcmij/e9d86314ccbe9089be3b1646171c3b02.js"></script>

The `greetPerson` function (the "outer" function) contains another function inside its function body, called `innerFunction`. This inner function has access to the `name` argument of `greetPerson`, as well as its own `greeting` argument.

In line 8 we call `greetPerson('Timir')`. The `greetPerson` function sets its `name` argument to the string `'Timir'` and then returns its inner function. This inner function  **retains access to the `name` argument** and its value `'Timir'`, even after `greetPerson` exits. 

> Returning an inner function that accesses arguments and/or variables of its outer function creates (what we call) a **closure**.

In line 8 the return value of `greetPerson` (i.e. the inner function) is assigned to the variable `greetTimir`.

In line 9 we are now calling effectively calling the inner function, as assigned the variable `greetTimir`, and passing it the string `'Good morning'`. The end result in line 10 is that we print to the console the message:

```
Good morning, Timir
```

We could obtain the same result by scrapping lines 1-8 and replace it with the code below. We wouldn't be able to tell the difference from just looking at the output produced.

<script src="https://gist.github.com/remarcmij/2327c1fe2fe85d587df610a7f28f436e.js"></script>

But with that alternative `greetTimir` function we can only greet Timir. In contrast, with the `greetPerson` function we can easily produce functions to greet any person we like (or don't like :wink:), e.g.:

<script src="https://gist.github.com/remarcmij/eb3971a655f61ded7384e9f1892e8cf4.js"></script>

### Recommended additional reading:

[Eloquent JavaScript - Chapter 3: Functions](http://eloquentjavascript.net/03_functions.html) (Press Ctrl+F in your browser and search for the word 'closure')





