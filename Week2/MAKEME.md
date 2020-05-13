# Homework JavaScript1 Week 2

## **Todo list**

1. Practice the concepts
2. JavaScript exercises
3. Code along
4. PROJECT: Grade calculator

## **1. Practice the concepts**

In this section you will be doing interactive exercises, that will allow you to practice with the concepts you've learned about this week!

- Do all parts of [Codecademy: Arrays](https://www.codecademy.com/courses/introduction-to-javascript/lessons/arrays) (Signup required!)
- Do 5 exercises of [FreeCodeCamp: Basic data structures](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures)

## **2. JavaScript exercises**

> Inside of your `JavaScript1` fork and inside of the `Week2` folder, create a folder called `homework`. Inside of that folder, create a folder called js-exercises. For all the following exercises create a new .js file in that folder (5 files in total). Make sure the name of each file reflects its content: for example, the filename for exercise one could be removeComma.js.

> For all the following exercises create a new .js file. Try to find a proper name for each file or make a small comment about what it does inside for future reference.

> Start each file off with the string `'use strict'` at the top.

**Exercise 1: Remove the comma**

Consider the following string:

```js
let myString = 'hello,this,is,a,difficult,to,read,sentence';
```

Follow the steps:

1. Add the variable to your file.
2. Log the length of `myString`.
3. The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces. (use Google!)
4. After replacing the commas, log `myString` to see if you succeeded.

Expected result in the console: `hello this is a difficult to read sentence`

**Exercise 2: The even/odd reporter**

Report whether or not a number is odd/even!

1. Create a `for` loop, that iterates from 0 to 20.
2. Create a conditional statement that checks if the value of the counter variable is odd or even.
3. If it's odd, log to the console `The number [PUT_NUMBER_HERE] is odd!`.
4. If it's even, log to the console `The number [PUT_NUMBER_HERE] is even!`.

**Exercise 3: The recipe card**

Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!

1. Declare a variable that holds an empty object literal (your meal recipe).
2. Give the object 3 properties: a `title` (string), a `servings` (number) and an `ingredients` (array of strings) property.
3. Log each property out separately, using a loop (for, while or do/while)

Expected result:

```console
Meal name: Omelette
Serves: 2
Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
```

**Exercise 4: The reading list**

Keep track of which books you read and which books you want to read!

Follow the steps:

1. Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the `title` (string), `author` (string), and `alreadyRead` (boolean indicating if you read it yet).
2. Loop through the array of books.
3. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
4. Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like `You already read "The Hobbit"` right after the log of the book details
5. If you haven't read it log a string like `You still need to read "The Lord of the Rings"`

**Exercise 5: Who wants a drink?**

You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.

1. Declare a variable that holds an empty array, called `drinkTray`.

There are 3 different types of drinks:

```js
const drinkTypes = ['cola', 'lemonade', 'water'];
```

2. Create a loop that runs 5 times. On each iteration, push a drink into the `drinkTray` variable. The `drinkTray` can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.

```js
// Expected result:
const drinkTray = ['cola', 'cola', 'lemonade', 'lemonade', 'water'];

// 'Hey guys, I brought a cola, cola, lemonade, lemonade, water!'
```

3. If there are already two instances of a `drinkType` then start with the next drink in the array.
4. Your `drinkTray` should contain 2 cola, 2 lemonade and 1 water.
5. Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")

Test out your code using `node` in the command line!

## **3. Code along**

> Create a new GitHub repository for each of these projects. They are portfolio pieces!

In the following 2 projects you'll be flexing your HTML/CSS skills again, together with writing JavaScript code. They are similar in structure and logic, so be sure to spot the similarities!

It's ok if you don't understand exactly what's happening here. Just follow along and try to understand: ask yourself questions about what the developer is doing and think about every line of code.

**Project 1: Temperature Converter**

This project will teach you how to convert temperature from one scale to another in real-time!

In the first part you'll be building the basic frontend, which means the way the page is going to look using only HTML/CSS. In the second part you'll be writing the logic that will allow a user to convert the temperature from one temperature scale to another (i.e. Celsius to Fahrenheit)

- [Temperature Converter Pt. I](https://www.youtube.com/watch?v=EHclqGV_KME)
- [Temperature Converter Pt. II](https://www.youtube.com/watch?v=8mRGfLL1nzE)

**Project 2: Weight Converter**

In the following tutorial you'll learn how to make a Weight Converter application. You'll make use of HTML, CSS and JavaScript. At first you'll be building the basic layout of the frontend (the HTML & CSS). After you'll start writing the JavaScript logic that will `convert pounds into grams`.

In order to speed up development you'll be using a CSS framework: [Bootstrap 4](https://www.getbootstrap.com). While coding along, have a look through the documentation in order to get familiar with the different class names to see what they do.

- [Weight Converter App](https://www.youtube.com/watch?v=7l-ZAuU8TXc)

## **4. PROJECT: Grade calculator**

> Every week ends with a project you have to build on your own. Instead of getting clear-cut instructions, you'll get a list of criteria that your project needs to measure up to.

In this project you'll write a `function` that calculates grades, based on the American grading system! Let's say a student did a test and they got a 60 out of 100, this `function` will:

1. convert the score into a percentage
2. calculate what grade corresponds with that percentage, and
3. shows in the command line the result: the grade and the percentage

In this example this is what we would expect the `function` to return in the command line:

```markdown
You got a D (60%)!
```

When writing the `function`, make use of the following grade scores:

```markdown
Grade A (90% - 100%)
Grade B (80% - 89%)
Grade C (70% - 79%)
Grade D (60% - 69%)
Grade E (50% - 59%)
Grade F (0% - 49%)
```

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents
- Use either a switch or if/else statement
- Write at least 2 comments that explain to others what a line of code is meant to do
- Make the return value of the function a template string, so you can insert variables!
- Use `node` from the command line to test if your code works as expected

Good luck!

## **SUBMIT YOUR HOMEWORK!**

After you've finished your todo list it's time to show us what you got! The homework that needs to be submitted is the following:

1. JavaScript exercises
2. PROJECT: Grade calculator

Upload both to your JavaScript1 repository forked to your personal account in GitHub. Make a pull request to the [HackYourHomework/JavaScript1](https://www.github.com/hackyourhomework/javascript1).

> Forgotten how to upload your homework? Go through the [guide](../hand-in-homework-guide.md) to learn how to do this again.

_Deadline Saturday 23.59 CET_
