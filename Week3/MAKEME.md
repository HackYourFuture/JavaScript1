# Homework JavaScript1 Week 3

## **Todo list**

1. Practice the concepts
2. JavaScript exercises
3. Code along
4. PROJECT: Grade calculator
5. [OPTIONAL] Extra resources

## **1. Practice the concepts**

In this section you will be doing interactive exercises that will allow you to practice with the concepts you've learned about this week.

In the first course you'll learn about functions, the structure and how they're used. They are a fundamental part of understanding programming and you should become very familiar with them!

- [Codecademy: Functions ](https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions)

In this second course you'll learn about `higher order functions`, which we'll refer to again during the [JavaScript2](https://www.github.com/HackYourFuture/JavaScript2) module. Go through it to get familiar, but don't feel like you completely have to understand it at this point.

- [Codecademy: Higher Order Functions](https://www.codecademy.com/courses/introduction-to-javascript/lessons/higher-order-functions/)

## **2. JavaScript exercises**

In the following exercises you'll practice every concept you've learned about so far in this module.

> Before you start, create a folder called `week2-scripts`. Inside, create 5 `.js` files, each dedicated to the exercises in this section. Make sure you give the files a name that reflects its content. For example, for exercise 1 an appropriate name would be: `giveCompliment.js`.

**Exercise 1: You are [INSERT COMPLIMENT], Noer!**

There is no better way to start your day then with a compliment!

1. Write a function named `giveCompliment`

- It takes 1 argument: your name
- Inside the function create an array with 10 strings. Each string should be a compliment, like `"great"`, `"awesome"`
- Write logic that randomly selects a compliment
- Return a string: "You are [COMPLIMENT], [YOUR_NAME]!

2. Call the function three times, giving each function call the same argument: your name.

**Exercise 2: Dog years**

You know how old your dog is in human years, but what about dog years? Calculate it!

1. Write a function named `calculateDogAge`.

- It takes 1 argument: your puppy's age (number).
- Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
- Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"

2. Call the function three times with different sets of values.

**Exercise 3: Be your own fortune teller**

Why pay a fortune teller when you can just program your fortune yourself?

1. Write a function named `tellFortune`.

- It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
- Randomly select values from the arrays.
- Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."

2. Create 4 arrays, `numChildren`, `partnerNames`, `locations` and `jobs`. Give each array 5 random values that make sense
3. Call the function 1 time, by passing the arrays as the argument.

**Exercise 4: Shopping at the supermarket**

Let's do some grocery shopping! We're going to get some things to cook dinner with. However, you like to spend your money and always buy too many things. So when you have more than 3 items in your shopping cart the first item gets taken out.

1. Write a function named `addToShoppingCart`.

- It takes in 1 argument: a grocery item (string)
- Add grocery item to array. If the amount of items is more than 3 remove the first one in the array
- Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"

2. Create an array with 2 predefined strings: `"bananas"` and `"milk"`
3. Call the function 3 times, each time with a different string as the argument.

**Exercise 5: Total cost is ...**

You want to buy a couple of things from the supermarket to prepare for a party. After scanning all the items the cashier gives you the total price, but the machine a broken! Let's write her a function that does it for her instead!

1. Write a function called `calculateTotalPrice`

- It takes 1 argument: an object that contains properties that only contain number values
- Add all the number values together
- Return a number: the total price of all items

2. Create an object named `cartForParty` with 5 properties. Each property should be a grocery item (like `beers` or `chips`) and hold a number value (like `1.75` or `0.99`)
3. Call the function 1 time, giving it the object `cartForParty` as an argument

## **3. Code along**

In this project you'll be building a simple meditation application, that will allow you to set a timer, loop a video and play a song!

You'll be working with the <audio> and <video>, understand what SVG is and how to animate them.

- [Meditation App](https://www.youtube.com/watch?v=oMBXdZzYqEk)

## **4. PROJECT: Credit Card Validator**

> Every week ends with a project you have to build on your own. Instead of getting clear-cut instructions, you'll get a list of criteria that your project needs to measure up to.

In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers
- You must have at least two different digits represented (all of the digits cannot be the same)
- The final digit must be even
- The sum of all the digits must be greater than 16
- The following credit card numbers are valid:

```markdown
9999777788880000
6666666666661666
```

The following credit card numbers are invalid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents
- Create a function with a descriptive name, for example: `doSomething` or `calcAnotherThing`
- Write at least 2 comments that explain to others what a line of code is meant to do
- Make the return value of the function a template string, so you can insert variables!
- Use `node` from the command line to test if your code works as expected

Good luck!

## **5. [OPTIONAL] Extra resources**

If you have time left over and feel like you could go for more practice, try out the following course:

- [JavaScript30](https://javascript30.com/)

In this free course, you'll build 30 small projects that will sharpen your HTML, CSS and JavaScript skills. Each project is meant to show you different ways you could use programming to make fun and useful things! Have fun!

## **SUBMIT YOUR HOMEWORK!**

After you've finished your todo list it's time to show us what you got! The homework that needs to be submitted is the following:

1. JavaScript exercises
2. PROJECT: Grade calculator

Upload both to your forked JavaScript1 repository in GitHub. Make a pull request to the original repository.

> Forgotten how to upload your homework? Go through the [guide](../hand-in-homework-guide.md) to learn how to do this again.
