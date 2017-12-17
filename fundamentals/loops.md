# Loops

A loop is a programming construct to perform a repetitive action. Often (but not always) the repetitive action involves accessing or manipulating the individual elements of an array.

We will use the array of month names given below to illustrate the various types of loop constructs available in JavaScript. In the examples we will print out the names of the individual months using a `console.log` statement.

```js
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
```

## while

The `while` loop is probably the simplest one of the bunch. Its general syntax is:

```js
while (cond) {
  // statement block to be repeated
}
```

The loop 'body' (i.e., the statement block including the curly braces) is executed while the condition `cond` holds true. In order for this while loop to execute at least once and to finish in finite time two preconditions must be fulfilled:

1. The condition `cond` should initially hold true.
2. Some code inside the code block must eventually cause the condition to become false.

Applied to our `months` array the while loop would look like this:

```js
const months = [
  ...
];

let index = 0;
const len = months.length; // 12

while (index < len) {
  console.log(months[index]);
  index += 1;
}
```

In this example the two preconditions mentioned earlier are met:

1. The condition `index < len` initially holds true because `index` is initialized to `0` and we know that `len` is fixed at the value of `12` (hence the use of `const` rather than `let`).
2. Because the value of `index` is incremented by one each time the loop body is executed there will be a point in time when the loop condition becomes false. This will happen when the value `index` has become `12` and `index < len` no longer holds true.

If precondition 2 is **not** met then your loop will execute forever. This is what is commonly referred to as an _infinite loop_. Your code will appear to 'hang' when this happens, and you will need to somehow terminate the program and fix the problem (e.g., press Ctrl-C when running in Node).

More info on MDN: [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

## do...while

This is a variation of the while loop discussed above. Its general syntax is:

```js
do {
  // statement block to be repeated
} while (cond);
```

The do...while loop is executed at least once, because the loop condition is evaluated at the _end_ of the loop rather than at the _beginning_ as is the case with the regular `while` loop.

Applied to our 'months' example the code would look like this:

```js
const months = [
  ...
];

let index = 0;
const len = months.length;

do  {
  console.log(months[index]);
  index += 1;
} while (index < len)
```

We recommend that you do not use the `do...while` loop, exactly for the reason that the loop body is executed at least once without taking the loop condition into account. It is always possible to rewrite a `do...while` loop into a regular `while` loop that strictly meets the two preconditions mentioned earlier.

More info on MDN: [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

## for

The `for` loop is the most used loop construct that you will come across and that you are likely to use most in your own code. It exists in a number of variations in JavaScript that we will cover one by one below. The syntax of the most generic form is as follows:

```js
for ([initialization]; [condition]; [final-expression]) {
 // statement block to be repeated
}
```

Let's first look at an example:

```js
const months = [
  ...
];

const len = months.length;

for (let index = 0; index < len; index++) {
  console.log(months[index]);
}
```

The `for` statement combines three parts of the loop construct in a single statement. Those three parts are separated by semicolons and, enclosed within parentheses, directly follow the `for` keyword.

1. The first part is the for loop initialization of a loop 'index' variable, here called `index`. (Often you will see one letter variable names, such as `i` for the loop index.). This part is executed only once.
2. The second part is the loop condition, and is evaluated for every loop [iteration](http://www.dictionary.com/browse/iteration). The loop body is executed while this condition holds true. Note that this condition is tested at the beginning of the loop (like `while` above) and **not** at the end (like `do...while`).
3. The last part is where the loop index variable is updated, in this case incremented by one (`index++` is short for `index += 1`, which in itself is short for `index = index + 1`). This update is effectively done at the end of the loop (in the example, after the console.log has been executed).

More info on MDN: [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## for...of

The `for...of` loop construct is relatively new and very well suited for use with arrays. It was introduced with the ES6 variant of JavaScript. Its general syntax is:

```js
for (variable of iterable) {
  // statement block to be repeated
}
```

Here, `iterable` can be a couple of things, but most of the time it is just an array variable. Let's again look at an example.

```js
const months = [
  ...
];

for (const month of months) {
  console.log(month);
}
```

With this `for` loop variant, the array is considered a collection of elements (you can _iterate_ through a collection: it is 'iterable'). Each time the loop body is executed the loop variable receives the next value of the array (in the example, starting with `'January'` and ending with `'December'`).

This now allows us to write very elegant and short code. No need to mess around with a loop index variable, array lengths etc. If you need to use a `for` loop involving arrays, this will often be your first choice.

More on MDN: [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

## for..in

This loop variant is for use with JavaScript objects only. It existed before the `for...of` loop variant became available.

We will discuss the `for...in` variant in more detail the part of the curriculum where we deal with Objects. Here, we will suffice to say that the `for...in` loop construct can easily be rewritten as a `for...of` loop, as follows:

```js
const obj = {
  a: 10,
  b: 'test'
}

// for...in
for (const key in obj) {
  console.log(obj[key])
}

// equivalent for...of
for (const key of Object.keys(obj)) {
  console.log(obj[key])
}
```

More info on MDN: [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
