# Homework JavaScript1 Week 1

## Todo list

1. Practice the concepts
2. JavaScript exercises
3. Code along
4. PROJECT:

### 1. Get to know

Before we learn how to build actual applications, we first need to gain experience using JavaScript in a computational way. This teaches us how to think like a programmer, and gives us more experience with the language itself.

In the following exercises you'll learn how to use different JavaScript concepts to solve common computational problems:

- [Learn-js](https://www.learn-js.org/). Do all the `Learn the basics` exercises.
- [Codecademy: Introduction to JavaScript](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction). Do all the exercises (#1 to #10).
- [FreeCodeCamp: Introduction to JavaScript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript). Do at least 20 exercises, you can choose whichever ones you feel are challenging enough.

### 2. JavaScript exercises

Inside of your `JavaScript1` fork, create a folder called `week1`. Inside of that folder, create a folder called `js-exercises`. For all the following exercises create a new `.js` file in that folder (10 files in total). Make sure the name of each file reflects its content: for example, the filename for exercise one could be `logHello.js`.

In each file, start off with the string `'use strict'`. This will make sure the code interpreter will enforce stronger rules when looking at your code.

> Before starting, make sure you have [Node.js](https://nodejs.org/en/download/) installed on your computer. You'll use this to execute your code to check if it works.

**Exercise 1: Hello world!**

Write a statement, using the `console.log()` function. Give it a string as an argument. The string should contain the message "Hello world!".

Write 10 statements like these, but in different languages.

For example:

```
Halo, dunia! // Indonesian
Ciao, mondo! // Italian
Hola, mundo! // Spanish
```

Using the command line, navigate to your `week1` folder and type in the following to test your code:

```
node FILENAME.js
```

It should show the message `Hello world!` in 10 different languages.

**Exercise 2: Error debugging**

Consider the following code:

```js
console.log('I'm awesome');
```

Copy the code in your `.js` file and run it in the command line using `node`. You will see that you will get a SyntaxError. **Correct the mistake**.

Hint: the SyntaxError message will give you some indication of what the error _might_ be, but figure out yourself how to correct it!

When done right, it should show the message `I'm awesome`.

**Exercise 3: Log the number**

Follow the steps. Make sure that each step is written on the line after. The file should have 6 lines (excluding the 'use strict') in total.

1.  First, _declare_ your variable `numberX`. Do not _initialize_ it (which means, don't give it a value) yet.
2.  Add a `console.log` statement that explains in words _what you think_ the value of `x` is, like in this example.
3.  Add a `console.log` statement that logs the value of `numberX`.
4.  Now _initialize_ your variable `numberX` with a number (also called an `integer` in computer science terms).
5.  Next, add a `console.log` statement that explains _what you think_ the value of `numberX` is.
6.  Add a `console.log` statement that logs the value of `numberX`.

**Exercise 4: Log the string**

Follow the steps. Make sure that each step is written on the line after. The file should have 6 lines (excluding the 'use strict') in total.

1. Declare a variable `myString` and assign a string to it. Use your full name, including spaces, as the content for the string.
2. Write a `console.log` statement in which you explain in words _what you think_ the value of the string is.
3. Now `console.log` the variable `myString`.
4. Now reassign to the variable `myString` a new string.
5. Just like what you did before write a `console.log` statement that explains in words _what you think_ will be logged to the console.
6. Now console.log `myString` again.

**Exercise 5: Round a number and log it**

Follow the steps. Make sure that each step is written on the line after. The file should have 6 lines (excluding the 'use strict') in total.

1. Declare a variable `z` and assign the number 7.25 to it.
2. Write a `console.log` statement in which you log the value of `z`.
3. Declare another variable `a` that has the value of `z` but rounded to the nearest integer.
4. Write a `console.log` statement in which you log the value of `a`.
5. So now we have `z` and `a` find a way to compare the two values and store the highest of the two in a new variable.
6. Write a `console.log` statement in which you log the value of the highest value.

**Exercise 6: Log an array of animals**

Follow the steps. Make sure that each step is written on the line after. The file should have 7 lines (excluding the 'use strict') in total.

1. Declare variable and assign to it an empty array. Make sure that the name of the variable indicates it contains more than 1 item. For example `items` instead of `item`.
2. Write a `console.log` statement that explains in words _what you think_ the value of the array is.
3. Write a `console.log` statement that logs the array.
4. Create a new variable with an array that has 3 of your favorite animals, each in a different string. Make sure the name of the variables says something about what the variable contains.
5. Write a `console.log` statement that logs the second array.
6. Add a statement that adds another string ("Piglet)" to the array of animals.
7. Write a `console.log` statement that logs the second array!

**Exercise 7: Log the length of a string**

1. Declare a variable called `mySentence` and initialize it with the following string: "Programming is so interesting!".
2. Figure out (using Google) how to get the length of `mySentence`.
3. Write a `console.log` statement to log the length of `mySentence`.

**Exercise 8: **

8.0 Write a program that checks the types of two variables and prints out `SAME TYPE` if they are the same type.  
8.1 First declare at least four variables and assign them different data types.  
8.2 For each variable write a `console.log` statement that logs the value

```js
let foo = 3;
console.log("The value of my variable foo is: " + foo);
```

(Curious to know what a `foo` is? Check [this article](https://en.wikipedia.org/wiki/Metasyntactic_variable) on Wikipedia.)

8.3 Now write a `console.log` statement wherein you first explain in words what you think the _type_ of your variables is.  
8.4 Now use `typeof` to log the actual _type_ of your variables.  
8.5 Now compare the types of your different variables with one another.  
8.6 Make sure to also show a message when the variables you are comparing are not the same type.

For example:

```js
let x = 9;
let y = 'Hello';

if (...) {
    console.log('SAME TYPE');
}
// TODO -> add a way of giving feedback if your variables don't have the same type
```

**Exercise 9:**

9.0 If `x` equals 7, and the only other statement is `x = x % 3`, what would be the new value of `x`?  
9.1 Add at least 3 `console.log` statements in which you show that you understand what `%` does.

**Exercise 10:**

10.0 Write a program to answer the following questions:  
10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.  
10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?  
10.3 Add `console.log` statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).

### 3. Code along

We don't want to lose connection with HTML/CSS, so in the following tutorial you'll learn how to build a simple web application use HTML/CSS and JavaScript.

### 4. PROJECT:

Every week ends with a project you have to build on your own. Instead of getting clear-cut instructions, you'll get a list of criteria that your project needs to measure up to.

In this JavaScript-only project you'll write code that

Follow the instructions:

1. Create a `.js` file that will contain your temperature converter
2.

Example of how to use comments:

```js
const myName = "";
```

## SUBMIT YOUR HOMEWORK!

After you've finished your todo list it's time to show us what you got! Starting from this week you'll be submitting all your homework through GitHub. What you'll be doing is upload all your files to a forked repository (a copy from the original, which in this case is the [JavaScript1](https://www.github.com/HackYourFuture/JavaScript1) repository) using GIT.

Take a look at the following [guide](../hand-in-homework-guide.md) to see how it's done.

The homework that needs to be submitted is the following:

1. JavaScript exercises
2. PROJECT: Temperature converter

_Deadline Saturday 23.59 CET_
