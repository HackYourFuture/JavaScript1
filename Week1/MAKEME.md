# Homework JavaScript1 Week 1

## **Todo list**

1. Practice the concepts
2. JavaScript exercises
3. Code along

## **1. Practice the concepts**

Before we learn how to build actual applications, we first need to gain experience using JavaScript in a computational way. This teaches us how to think like a programmer, and gives us more experience with the language itself.

In the following exercises you'll learn how to use different JavaScript concepts to solve common computational problems:

- [Learn-js](https://www.learn-js.org/). Do all the `Learn the basics` exercises.
- [Codecademy: Introduction to JavaScript](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction). Do all the exercises (#1 to #10).
- [FreeCodeCamp: Introduction to JavaScript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript). Do at least 20 exercises, you can choose whichever ones you feel are challenging enough.

## **2. JavaScript exercises**

> Inside of your `JavaScript1` fork and inside of the `Week1` folder, create a folder called `homework`. Inside of that folder, create a folder called `js-exercises`. For all the following exercises create a new `.js` file in that folder (10 files in total). Make sure the name of each file reflects its content: for example, the filename for exercise one could be `logHello.js`.

> In each file, start off with the string `'use strict'`. This will make sure the code interpreter will enforce stronger rules when looking at your code.

> Before starting, make sure you have [Node.js](https://nodejs.org/en/download/) installed on your computer. You'll use this to execute your code to check if it works.

**Exercise 1: Hello world!**

Write a statement, using the `console.log()` function. It should fulfill the following requirements:

- It takes a string as an argument
- The string should contain the message `"Hello world!"`
- Execute the function 10 times, each time using the phrase in different languages

For example:

```
Halo, dunia! // Indonesian
Ciao, mondo! // Italian
Hola, mundo! // Spanish
```

Finished? Using the command line, navigate to your `js-exercises` folder and type in the following to test your code:

```console
foo@bar:~$ node FILENAME.js
```

Expected output: It should show the message `Hello world!` in 10 different languages.

**Exercise 2: Error debugging**

Consider the following code:

```js
console.log('I'm awesome'!;
```

Here are the requirements:

- Copy the code in your `.js` file and run it in the command line using `node`.

You will see that you will get a [SyntaxError](https://techterms.com/definition/syntax_error).

- **Correct the mistake**.

> Hint: the SyntaxError message will give you some indication of what the error _might_ be, but figure out yourself how to correct it!

Expected output: When done right, the command line should show the message `I'm awesome!`.

**Exercise 3: Log the number**

Follow the steps. Make sure that each step is written on the line after.

1.  First, declare your variable `numberX`. Do not _initialize_ it (which means, don't give it a starting value) yet
2.  Add a `console.log` statement that explains in words _what you think_ the value of `x` is
3.  Add a `console.log` statement that logs the value of `numberX`.
4.  Now _initialize_ your variable `numberX` with a number (also called an `integer` in computer science terms)
5.  Next, add a `console.log` statement that explains _what you think_ the value of `numberX` is
6.  Add a `console.log` statement that logs the value of `numberX`

**Exercise 4: Log the string**

Follow the steps. Make sure that each step is written on the line after.

1. Declare a variable `myString` and assign a string to it. Use your full name, including spaces, as the content for the string.
2. Write a `console.log` statement in which you explain in words _what you think_ the value of the string is.
3. Now `console.log` the variable `myString`.
4. Now reassign to the variable `myString` a new string.
5. Just like what you did before write a `console.log` statement that explains in words _what you think_ will be logged to the console.
6. Now console.log `myString` again.

**Exercise 5: Round a number and log it**

Follow the steps. Make sure that each step is written on the line after.

1. Declare a variable `z` and assign the number `7.25` to it.
2. Write a `console.log` statement in which you log the value of `z`.
3. Declare another variable `a` that has the value of `z` but rounded to the nearest integer.
4. Write a `console.log` statement in which you log the value of `a`.
5. So now we have `z` and `a` find a way to compare the two values and store the highest of the two in a new variable.
6. Write a `console.log` statement in which you log the value of the highest value.

**Exercise 6: Log an array of animals**

Follow the steps. Make sure that each step is written on the line after.

1. Declare variable and assign to it an empty array. Make sure that the name of the variable indicates it contains more than 1 item. For example `items` instead of `item`.
2. Write a `console.log` statement that explains in words _what you think_ the value of the array is.
3. Write a `console.log` statement that logs the array.
4. Create a new variable with an array that has 3 of your favorite animals, each in a different string. Make sure the name of the variables says something about what the variable contains.
5. Write a `console.log` statement that logs the second array.
6. Add a statement that adds another string ("Piglet)" to the array of animals.
7. Write a `console.log` statement that logs the second array!

**Exercise 7: Log the length of a string**

Follow the steps. Make sure that each step is written on the line after.

1. Declare a variable called `mySentence` and initialize it with the following string: "Programming is so interesting!".
2. Figure out (using Google) how to get the length of `mySentence`.
3. Write a `console.log` statement to log the length of `mySentence`.

**Exercise 8: Type checker**

Create a `function` that fulfills the following requirements:

- Takes in 2 arguments
- Check the data type of each
- Compares each data type
- Logs to the console the message `SAME TYPE` if they are the same type. If they are different types log `Not the same...`.

Follow the steps:

1. Declare 4 variables: 2 must be `strings` and 2 must be `objects`
2. Create 6 conditional statements, where for each you check if the data type of one variable is the same as the other
3. Find out how to check the type of a variable
4. Write 2 `console.log` statements to log the type of 2 variables, each with a different data type
5. Now compare the types of your different variables with one another
6. Log `Not the same...` when the types are different

Here's an incomplete example of how it could look:

```js
// Declare all variables
let x = 9;
let y = 67;

// Check data type
console.log(...);

// Check if data type is the same
if (...) {
    console.log('SAME TYPE');
}
```

**Exercise 9: Log the remainder**

Answer the following questions. For each, write in comments what the answer is followed by how you came to that conclusion:

1. If `x` equals 7, and the only other statement is `x = x % 3`, what would be the value of `x` after the calculation?
2. If `y` equals 21, and the only other statement is `y = y % 4`, what would be the value of `y` after the calculation?
3. If `z` equals 13, and the only other statement is `z = z % 2`, what would be the value of `z` after the calculation?

**Exercise 10: Compare arrays**

Follow the steps:

1. Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
2. Find out how to get the length of each array. Write a `console.log` statement that shows the length of each array

```js
const array = ["hello", 123, true, { name: "Noer" }];

console.log('The length of the array is...' + ...);
```

3. Write a conditional statement that checks if both are of equal length. If they are, log to the console `They are the same!`, if not log `Two different sizes`

## **3. Code along**

> Create a new GitHub repository for this project. It's a portfolio piece!

We don't want to lose the connection with HTML/CSS, so in the following tutorial you'll learn how to build a simple web application use HTML/CSS and JavaScript.

You'll first write the HTML and CSS, to provide structure and style to the page. When doing so, notice how the developer chooses to do this. Why do they use this tag instead of something else? Why do they give an element a certain class name?

After, the developer will write JavaScript code. You'll notice it's different from how you've used JavaScript. It is something we call **DOM Manipulation**. Don't worry, you don't need to master this just yet. Just follow along and do some research yourself if you already want to learn more about it!

- [Calculator](https://www.youtube.com/watch?v=6v4vBXL-qkY)

## **SUBMIT YOUR HOMEWORK!**

After you've finished your todo list it's time to show us what you got! Starting from this week you'll be submitting all your homework through GitHub. What you'll be doing is upload all your files to a separate repository.

Go over to [HackYourHomework/JavaScript1](https://www.github.com/HackYourHomework/JavaScript1). Notice how it's **HackYourHomework**, a repository meant to submit the homework!

Then take a look at the following [guide](../hand-in-homework-guide.md) to see to set everything up.

The homework that needs to be submitted is the following:

1. JavaScript exercises

_Deadline Saturday 23.59 CET_
