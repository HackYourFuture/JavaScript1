# Homework Week 7

```
Topics discussed this week:
• Object Oriented Programming
    • this
    • call
    • apply
    • bind
• Code flow (order of execution)
```

>[Here](/Week7/README.md) you find the readings you have to complete before the eighth lecture.

## Step 1: Give feedback

_Deadline Monday_

Give feedback on Step 4 and 5 of last weeks homework. Please provide the feedback in an issue.

## Step 2: Issues

_Deadline Monday_

- Solve all your Git issues. DO NO CLOSE AN ISSUE WITHOUT AN EXPLANATION OR CODE COMMIT REFERENCING THAT ISSUE. 


## Step 3: Fix issues

_Deadline Thursday_

- Fix the issues from the last weeks and make sure you explain how you fixed the issue in a comment (or commit message)

## Step 4: Some Challenges

_Deadline Saturday_

Let's practice working with Objects and Arrays. Go to FreeCodeCamp and complete all challenges under "Object Oriented and Functional Programming" and the _first four challenges_ under "Basic Algorithm Scripting", up until 'Find the longest word in a string.'

Also make: 

1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Iterate over Arrays with map](https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map)

## Step 5: OOP

_Deadline Wednesday_

```js
// Inspired by the lesson.
// Create the following objects: Movies, Staff.

//Fill the following methods:
Movies {
  getStars()
  getWrites()
  getDirector()
  getRating()
  rate()
  // ... Add yours :-) Look to IMDB for inspiration
}

Staff {
  getName()
  getRole()
  getAge()
  // ... Add yours :-) Look to IMDB for inspiration
}

// Initialize the objects
// by pick your favorite movie from http://www.imdb.com/
// and make sure that the following actions work.
console.log(InstanceMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = InstanceMovie.getDirector();
console.log(`Director: ${director.getName()}`);
// Be creative with this let's see what you come up with :-)
```

Fun extra step: If you get bored, template them and make a page by rendering the results in HTML :slightly_smiling_face:
with something like `document.querySelector('.move').innerHTML = MovieHTML`

## Step 6: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week7/README.md) to prepare for your next class

## _BONUS_ : Code Kata Race

If you haven't already join our clan: "Hack Your Future" in codewars

Solve the following problems:
- [Problem 1](https://www.codewars.com/kata/keep-up-the-hoop)
- [Problem 2](https://www.codewars.com/kata/find-the-first-non-consecutive-number)
- [Problem 3](https://www.codewars.com/kata/negation-of-a-value)
- Some more [Homework](https://www.codewars.com/collections/hyf-homework-1)

_Hints_
- Hint for Q1: split your code into two parts, one part for the case that one of the two strings has an extra letter at the start or the end but is otherwise identical & one part for the case that the strings are the same length but one character is different in one of the strings
- Also for Q1 this function on strings might be useful: [JavaScript String slice() method](https://www.w3schools.com/jsref/jsref_slice_string.asp)
- Also potentially useful: [JavaScript String charAt() Method](https://www.w3schools.com/jsref/jsref_charat.asp)
- [Hint for Q2](https://www.w3schools.com/jsref/jsref_sort.asp) Also there are no sample tests, you need to use submit

Remember the person with the most kata points gets a prize from Gijs (and you can do exercises on this website without us assigning them - anything kyu 7 or kyu 8 you can try to do - kyu 6 or lower is probably too hard) -->

-[MORE BONUS](https://www.codewars.com/collections/hyf-homework-1-bonus-credit) :collision:

## To watch before the next lecture:

(watch in this order)

1. [Stacks/Queues](https://www.youtube.com/watch?v=wjI1WNcIntg) (5 mins)
2. [JS Event Loops](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (26 mins, watch this one twice or until you understand it)

>Create a new repository "hyf-javascript3". Also create a new folder "week1" inside this repository. 
Upload your homework files inside the week1 folder and write a description for this “commit”.
Your hyf-javascript3/week1 should now contain the files of your homework.
Place the link to your repository folder in Trello.
