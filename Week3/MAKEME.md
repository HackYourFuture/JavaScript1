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

> Inside of your `JavaScript1` fork and inside of the `Week3` folder, create a folder called `homework`. Inside of that folder, create a folder called js-exercises. For all the following exercises create a new .js file in that folder (5 files in total). Make sure the name of each file reflects its content: for example, the filename for exercise one could be giveCompliment.js.

> In each file, start off with the string 'use strict'. This will make sure the code interpreter will enforce stronger rules when looking at your code.

**Exercise 1: You are amazing, Noer!**

There is no better way to start your day then with a compliment!

1. Write a function named `giveCompliment`

- It takes 1 argument: your name
- Inside the function define a variable that holds an array, `compliments`, with 10 strings. Each string should be a compliment, like `"great"`, `"awesome"`
- Write code that randomly selects a compliment
- Return a string: "You are [COMPLIMENT], [YOUR_NAME]!

2. Call the function three times, giving each function call the same argument: your name.

```js
// Expected output
giveCompliment('Noer'); // Returns "You are amazing, Noer!"
giveCompliment('Noer'); // Returns "You are great, Noer!"
giveCompliment('Noer'); // Returns "You are supersmart, Noer!"
```

**Exercise 2: Dog years**

You know how old your dog is in human years, but what about dog years? Let's calculate it!

1. Write a function named `calculateDogAge`.

- It takes 1 argument: your (fictional) puppy's age (number).
- Calculate your dog's age based on the conversion rate of `1 human year to 7 dog years`.
- Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"

2. Call the function three times with different sets of values.

```js
// Expected output
calculateDogAge(1); // Returns "Your doggie is 7 years old in dog years!"
calculateDogAge(2); // Returns "Your doggie is 14 years old in dog years!"
calculateDogAge(3); // Returns "Your doggie is 21 years old in dog years!"
```

**Exercise 3: Be your own fortune teller**

Why pay a fortune teller when you can just program your fortune yourself?

1. Create 4 arrays, `numChildren`, `partnerNames`, `locations` and `jobs`. Give each array 5 random string values that have to do with the name of the variable
2. Write a function named `tellFortune`.

- It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
- Randomly select values from the arrays.
- Return a string: "You will be a [JOB_TITLE] in [LOCATION], married to [PARTNER_NAME] with [NUMBER_KIDS] kids."

3. Call the function 3 times, by passing the arrays as the argument.

```js
// Expected output
const numChildren = [...];
const partnerNames = [...];
const locations = [...];
const jobs = [...];

tellFortune(numChildren, partnerNames, locations, jobs); // Returns "You will be a programmer in The Netherlands, married to Layla with 3 kids."
tellFortune(numChildren, partnerNames, locations, jobs); // Returns "You will be a farmer in France, married to Muhammed with 2 kids."
tellFortune(numChildren, partnerNames, locations, jobs); // Returns "You will be a teacher in The United States, married to Zara with 4 kids."
```

**Exercise 4: Shopping at the supermarket**

Let's do some grocery shopping! We're going to get some things to cook dinner with. However, you like to spend your money and always buy too many things. So when you have more than 3 items in your shopping cart the first item gets taken out.

1. Create an array called `shoppingCart` that holds the following strings: `"bananas"` and `"milk"`
2. Write a function named `addToShoppingCart`

- It takes 1 argument: a grocery item (string)
- Add grocery item to `shoppingCart`. If the amount of items is more than 3 remove the first one in the array
- Loops through the array in order to list out the items
- Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"

3. Call the function 3 times, each time with a different string as the argument.

```js
const shoppingCart = ['bananas', 'milk'];

// Expected output
addToShoppingCart('chocolate'); // Returns "You bought bananas, milk, chocolate!"
addToShoppingCart('waffles'); // Returns "You bought milk, chocolate, waffles!"
addToShoppingCart('tea'); // Returns "You bought chocolate, waffles, tea!"
```

**Exercise 5: Total cost is ...**

You want to buy a couple of things from the supermarket to prepare for a party. After scanning all the items the cashier wants to give you the total price, but the machine is broken! Let's write her a `function` that does it for her instead!

1. Create an object named `cartForParty` with 5 properties. Each property should be a grocery item (like `beers` or `chips`) and hold a number value (like `1.75` or `0.99`)
2. Write a function called `calculateTotalPrice`

- It takes 1 argument: an object that contains properties that only contain number values
- Loop through the object and add all the number values together
- Return a string: "Total: €[TOTAL_PRICE_ITEMS]"

3. Call the function 1 time, giving it the object `cartForParty` as an argument

```js
const cartForParty = { ... }

// Expected output
calculateTotalPrice(cartForParty); // Returns "Total: €10.75"
```

## **3. Code along**

> Create a new GitHub repository for this project. It's a portfolio piece!

In this project you'll be building a simple meditation application, that will allow you to set a timer, loop a video and play a song!

You'll be working with the <audio> and <video>, understand what SVG is and how to animate them.

- [Meditation App](https://www.youtube.com/watch?v=oMBXdZzYqEk)

## **4. PROJECT: Credit Card Validator**

> Every week ends with a project you have to build on your own. Instead of getting clear-cut instructions, you'll get a list of criteria that your project needs to measure up to.

In this project you'll write a `function`, called `validateCreditNumber`, that validates whether or not a credit card number is valid.

Here are the criteria for a valid number:

- Input must be 16 characters
- All characters must be numbers
- At least two different numbers should be represented
- The last number must be even
- The sum of all the numbers must be greater than 16

The following credit card numbers are valid:

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

```js
// Expected output

validateCreditNumber('a92332119c011112'); // Returns "Invalid! The input a92332119c011112 should contain only numbers!
validateCreditNumber('4444444444444444'); // Returns "Invalid! The input 4444444444444444 should contain at least 2 different types of numbers!
validatecreditNumber('6666666666661666'); // Returns "Success! The input 6666666666661666 is a valid credit card number!
```

After you've written your function, use `node` in the command line to test to see if your code works as expected.

Good luck!

## **5. [OPTIONAL] Extra resources**

If you have time left over and feel like you could go for more practice, try out the following course:

- [JavaScript30](https://javascript30.com/)

In this free course, you'll build 30 small projects that will sharpen your HTML, CSS and JavaScript skills. Each project is meant to show you different ways you could use programming to make fun and useful things. Try to do one each day for the next 30 days. Have fun!

## **SUBMIT YOUR HOMEWORK!**

After you've finished your todo list it's time to show us what you got! The homework that needs to be submitted is the following:

1. JavaScript exercises
2. PROJECT: Credit card validator

Upload both to your JavaScript1 repository forked to your personal account in GitHub. Make a pull request to the [HackYourHomework/JavaScript1](https://www.github.com/hackyourhomework/javascript1).

> Forgotten how to upload your homework? Go through the [guide](../hand-in-homework-guide.md) to learn how to do this again.
