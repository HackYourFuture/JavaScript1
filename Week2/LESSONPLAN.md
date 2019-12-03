# Lesson Plan JavaScript1 Week 2

## Agenda

The purpose of this class is to introduce to the student:

- The difference between statements & expressions
- What are operators
- What are loops
- What are conditional statements

## Core concepts

FIRST HALF (12.05 - 13.30)

## 1. Q&A about last week's concepts & homework

### Explanation

- static vs. dynamic websites
- Variables in JavaScript: `var`, `let`, `const`, declaration, initialization, assignment
- Basic Data Types in JavaScript: `number`, `string`, `boolean`, `undefined`, `null`
- Compound Data Types in JavaScript: `array`, `object`

### Exercise

Let the students explain the concepts themselves.

## 2. The difference between statements & expressions

### Explanation

An expression is a piece of code that resolves to a value (becomes a value)

A statement is an instruction

### Example

#### Expressions

- `sum(a, b)`
- `a`
- `a > 4 ? "yes" : "no"`
- `a + b`
- `a && b || c`

#### statements

- `let x;`
- `if (a > 4) { console.log("larger than 4"); } else { console.log("not larger than 4"); }`

### Exercise

#### Indicate for each of these whether it is an expression or a statement:

1. `l`
2. `l = 4;`
3. `l == 4`
4. `if (l == 4) { console.log("yes"); }`
5. `console.log("yes");`
6. `"yes"`
7. `console.log(l == 4 ? "yes" : "no")`
8. `function a() { return 4; }`
9. `let a = function () { return 4; }`

#### Given the following code:

```js
let s = 'Hello'.toLowerCase();
let l = s.length;

function sum(a, b) {
  return a + b;
}
let max = function(a, b) {
  return a > b ? a : b;
};

let s1 = sum(4, 5);
let s2 = 4 + 5;

if (s2 == s1) {
  console.log('same');
} else {
  console.log('not same');
}
```

List 5 statements from all 11 _statements_ in the code above

List 5 expressions of all 28 _expressions_ in the code above (BONUS!)

### Essence

It's important to know the difference between expressions and statement because:

1. It will give you an overview on what the code is about (is it an instruction or is code that resolves to a value)
2. While writing code you'll not mix up the two and therefore make sure that you do not write wrong code.

## 3. What are operators (comparison, arithmetic, logical, assignment)

### Explanation

- Arithmetic Operators
  - take numerical values (either literals or variables) as their operands and return a single numerical value.
  - `19 + 13`, `126 / 3`, `397 % 71`
- Comparison Operators
  - Two different types of comparison operators; They will always return a logical value,
    - Equality Operators
      - checks if the operands are 'the same'
      - difference in '=' '==' '==='
    - Relational Operators
      - checks if the specific relation between two operands is true or false
      - `>`, `<`, `<=`, `>=`


- Logical Operators
  - Mostly 'comparing' boolean values, but it can be used with any type.
  - `true || false`, `false && true`, `!true`
  
- Assignment Operators
  - assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal '='
  - `+=`, `-=`, `*=`, `/=`

(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

### Example

https://www.tutorialsteacher.com/javascript/javascript-operators

### Exercise

See example

### Essence

Operators are very important in a programming language, because this is how we manipulate values.
In fact, operators are the building blocks of all possible actions.

SECOND HALF (14.00 - 16.00)

## 4. What are loops (do/while & for loop)

### Explanation

Programming loops are about doing the same thing over and over again, without typing the code over and over again. Another term for that is: iteration

Wikipedia: In most computer programming languages, a while loop is a (control flow) statement that allows (a block of) code to be executed repeatedly based on a given Boolean condition.

### Example

```javascript
```

### Exercise

Make a for loop with a do-while loop

### Essence

In programming you have to do a lot of (almost) similar calculations over and over again. Using loops makes it easier (and less boring) to code. Next to that it makes sure the the code is much more compact.

You can check: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code as well. underneath the paragraph: 'Why bother'

## 5. What are conditional statements (if/else & switch)

### Explanation

The normal order of execution of statements in a computer program is in straight-line order, from top to bottom. However, sometimes it is desirable to execute one or more statements conditionally, i.e. depending on whether some condition – determined by the state of your program – holds true (Boolean expression).

In its simplest form the `if` statement looks like this:

```js
if () {
}
```

Then we have:

```js
if() {
} else {
}
```

At last we have:

```js
if() {
} else if {
}
```

The switch statement can sometimes be a useful alternative to a long list of if statements. This is the case when the condition is an expression that can be decomposed into a number of distinct values or cases, as shown in the example below.
Depending on the value of the expression specified in the `switch` clause, one of the `case` statement blocks is executed. Each statement block should end with a `break` statement to ensure that a `case` doesn't 'fall through' into the next `case`.

The `default` statement at the end is executed when none of the preceding cases hold true. The `default` statement is not strictly required, but is a best practice to always specify one.

### Example

```js
if (distance < 10) {
  console.log('I will take the bike.');
}
```

```js
const hyfModule = 'JavaScript-1';
let message = '';

switch (hyfModule) {
  case 'HTML/CSS':
    message = 'In this module you will learn HTML and CSS.';
    break;
  case 'JavaScript-1':
    message = 'In this module you will learn Git and JavaScript basics.';
    break;
  case 'JavaScript-2':
    message = 'In this module you will learn about JavaScript in the browser with HTML and CSS.';
    break;
  case 'JavaScript-3':
    message = 'In this module you will learn about Async and API calls.';
    break;
  case 'Node':
    message = 'This module is about building server and CLI applications using Node.';
    break;
  case 'Database':
    message = 'In this module is about Relational and Non-Relational Data and Database Systems.';
    break;
  case 'React':
    message = 'In this module you will to build Single Page Applications using React.';
    break;
  case 'Project':
    message = 'In this final module you will do your graduation project.';
    break;
  default:
    message = 'This module is unknown: ' + hyfModule;
}

console.log(message);
```

### Exercise

Create a Switch/Case that will log the season based on the month.

```javascript
const month = 'January';
let season = '';

switch (month) {
  case 'January':
    season = 'winter';
    break;
}

console.log(season); // 'winter'
```

https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Statements/if...else

### Essence
