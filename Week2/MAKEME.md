# Homework JavaScript1 Week 2

## **Todo list**

1. Practice the concepts
2. JavaScript exercises
3. Code along
4. PROJECT:

## **1. Practice the concepts**

In this section you will be doing interactice exercises, that will allow you to practice with the concepts you've learned about this week!

- [Codecademy: Arrays](https://www.codecademy.com/courses/introduction-to-javascript/lessons/arrays)
- [FreeCodeCamp: Basic data structures](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures)

So far you've been practicing with JavaScript by itself. This is useful, but we shouldn't lose the connection between this and what we learned before: HTML & CSS.

In the following tutorial you'll learn how to combine JavaScript with HTML & CSS in order to build a simple calculator:

- [Calculator]()

## **2. JavaScript exercises**

> For all the following exercises create a new .js file. Try to find a proper name for each file or make a small comment about what it does inside for future reference.

> Start each file off with the string `'use strict'` at the top.

**Exercise 1: Remove the comma**

Consider the following string:

```js
let myString = "hello,this,is,a,difficult,to,read,sentence";
```

1. Add the variable to your file.
2. Log the length of `myString`.
3. The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces. (use Google!)
4. After replacing the commas, log `myString` to see if you succeeded.

**Exercise 2: The even/odd reporter**

Report whether or not a number is odd/even!

1. Create a `for` loop, that iterates from 0 to 20.
2. Create a conditional statement that checks if the value of the counter variable is odd or even.
3. If it's odd, log to the console `The number [PUT_NUMBER_HERE] is odd!`.
4. If it's even, log to the console `The number [PUT_NUMBER_HERE] is even!`.

**Exercise 3: The recipe card**

Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!

1. Declare a variable that holds an object (your meal recipe).
2. Give the object 3 properties: a `title` (string), a `servings` (number) and an `ingredients` (array of strings) property.
3. Log each property out seperately.

It should look similar to this:

```markdown
Meal name: Omelete
Serves: 2
Ingredients:
4 eggs
2 strips of bacon
1 tsp salt/pepper
```

**Exercise 4: The reading list**

Keep track of which books you read and which books you want to read!

1. Create an array of 3 objects, where each object describes a book and has properties for the `title` (string), `author` (string), and `alreadyRead` (boolean indicating if you read it yet).
2. Loop through the array of books.
3. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
4. Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like `You already read "The Hobbit"` right after the log of the book details
5. If you haven't read it log a string like `You still need to read "The Lord of the Rings"`

**Exercise 5: **
**Exercise 3: **
**Exercise 3: **

**Array exercises!**

Consider the following array:

```js
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
```

2.1 Add a statement that adds Mauro's favorite animal _'turtle'_ to the existing array.
2.2 Log your new array!
2.3 Now add Jim's favorite animal to the array, it's _'meerkat'_, but make sure it will be placed after _'blowfish'_ and before _'capricorn'_.
2.4 Write a console.log statement that explains in words _you think_ the new value of the array is.
2.5 Log your new array!
2.6 Log the length of the array, add a message: _'The array has a length of: '_ (here you should show the length of the array).
2.7 Jason does not like _'giraffe'_, delete this animal from the array.
2.8 Again log your new array.
2.9 Now if unlike Jim, you don't like _'meerkat'_ and you want to delete it from the array, but you don't know the position or the `index` of the item in the array, how can you find it?
2.10 Log the index of _'meerkat'_. Add a message so it says: _'The item you are looking for is at index: '_ (here you should show the index of the item).

1. Create a function that takes 3 arguments and returns the sum of the these arguments.

2. Create a function named `colorCar` that receives a color, and prints out, _'a red car'_ for example.

3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

4. Create a function named `vehicleType` that receives a color, and a code, 1 for car, 2 for motorbike. And prints _'a blue motorbike'_ for example when called as `vehicleType("blue", 2)`

5. Can you write the following without the `if` statement, but with just as a single line with `console.log(...);`?

   ```js
   if (3 === 3) {
     console.log("yes");
   } else {
     console.log("no");
   }
   ```

6. Create a function called `vehicle`, like before, but takes another parameter called `age`, so that `vehicle("blue", 1, 5)` prints _'a blue used car'_

7. Make a list of vehicles, you can add `"motorbike"`, `"caravan"`, `"bike"`, or more.

8. How do you get the third element from that list?

9. Change the function `vehicle` to use the list of question 7. So that `vehicle("green", 3, 1)` prints "a green new bike".

10. Use the list of vehicles to write an advertisement. So that it prints something like: `"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."`. (Hint: use a `for` loop.)

    > Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.

11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

12. Create an empty object.

13. Create an object that contains the teachers that you have had so far for the different modules.

14. Add a property to the object you just created that contains the languages that they have taught you.

15. Write some code to test two arrays for equality using `==` and `===`. Test the following:

    ```js
    let x = [1, 2, 3];
    let y = [1, 2, 3];
    let z = y;
    ```

    What do you think will happen with `x == y`, `x === y` and `z == y` and `z == x`? Prove it!

    Check out this [Fiddle](http://jsfiddle.net/jimschubert/85M4z/). You need to open your browser’s Developer Tools to see the console output. Press the Run button in the upper right corner to run the code.

    More insights from this [Stack Overflow question](http://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript).

16. Take a look at the following code:

    ```js
    let o1 = { foo: "bar" };
    let o2 = { foo: "bar" };
    let o3 = o2;
    ```

    Show that changing `o2` changes `o3` (or not) and changing `o1` changes `o3`(or not).

    Does the order that you assign (`o3 = o2` or `o2 = o3`) matter?

17. What does the following code return? (And why?)

    ```js
    let bar = 42;
    typeof typeof bar;
    ```

> ‘Coerce' means to try to change - so coercing `var x = '6'` to number means trying to change the type to number temporarily.

## **3. Code along**

> Create a new folder outside of your `JavaScript1` fork

In the following 2 projects you'll be flexing your HTML/CSS skills again, together with writing JavaScript code. They are similar in structure and logic, so be sure to spot the similarities!

It's ok if you don't understand exactly what's happening here. Just follow along and try to understand: ask questions about what the developer is doing and think about every line of code.

**Project 1: Temperature Converter**

This project will teach you how to convert the temperature from one scale to another in real-time!

In the first part you'll be building the basic frontend, which means the way the page is going to look using only HTML/CSS. In the second part you'll be writing the logic that will allow a user to convert the temperature from one temperature scale to another (i.e. Celsius to Fahrenheit)

- [Temperature Converter Pt. I](https://www.youtube.com/watch?v=EHclqGV_KME)
- [Temperature Converter Pt. II](https://www.youtube.com/watch?v=8mRGfLL1nzE)

**Project 2: Weight Converter**

In the following tutorial you'll learn how to make a Weight Converter application. You'll make use of HTML, CSS and JavaScript. At first you'll be building the basic layout of the frontend (the HTML & CSS). After you'll start writing the JavaScript logic that will `convert pounds into grams`.

In order to speed up development you'll be using a CSS framework: [Bootstrap 4](https://www.getbootstrap.com). While coding along, have a look through the documentation in order to get familiar with the different class names to see what they do.

- [Weight Converter App](https://www.youtube.com/watch?v=7l-ZAuU8TXc)

###** 4. PROJECT: Grade calculator**

> Every week ends with a project you have to build on your own. Instead of getting clear-cut instructions, you'll get a list of criteria that your project needs to measure up to.

In this project you'll write a script that calculates grades, based on the American grading system! Let's say a student did a test and they got a 60 out of 100, this script will:

1. convert the score into a percentage
2. calculate what grade corresponds with that percentage, and
3. shows in the command line the result: the grade and the percentage

When writing the script, make use of the following grade scores:

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

This is what the script is expected to return in the command line:

```markdown
You got a B (85%)!
```

Good luck!

## **SUBMIT YOUR HOMEWORK!**

After you've finished your todo list it's time to show us what you got! The homework that needs to be submitted is the following:

1. JavaScript exercises
2. PROJECT:

Upload both to your forked JavaScript1 repository in GitHub. Make a pull request to the original repository.

> Forgotten how to upload your homework? Go through the [guide](../hand-in-homework-guide.md) to learn how to do this again.

_Deadline Saturday 23.59 CET_
