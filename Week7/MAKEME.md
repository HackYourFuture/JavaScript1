# Homework Week 7

```
Topics discussed this week:
• Object Oriented Programming
• Code flow (order of execution)
• Async VS Sync
```

>[Here](/Week7/README.md) you find the readings you have to complete before the eighth lecture.

## Step 1: Give feedback on Step 3 and 4 of last weeks homework.

_Deadline Monday_

Give feedback on the SPA (Github API) and git branching homework of one of you fellow students. Please provide the feedback in an issue.

## Step 3: Issues

- Solve all your Git issues. DO NO CLOSE AN ISSUE WITHOUT AN EXPLANATION OR CODE COMMIT REFERENCING THAT ISSUE. 


## Step 3: Fix issues and API

- Fix the issues from the last week and make sure you explain how you fixed the issue in a comment (or commit message)

## Step 3: Some Challenges

_Deadline Saturday_

Let's practice working with Objects and Arrays. Go to FreeCodeCamp and complete all challenges under "Object Oriented and Functional Programming" and the _first four challenges_ under "Basic Algorithm Scripting", up until 'Find the longest word in a string.'

## Step 4: Some more JavaScript

_Deadline Saturday_

Make a website that fetches (= to get) data asynchronously.

1) Create a new website with external js file

2) Add a button (e.g. 'click me') that when clicked `console.logs` 'you clicked me!'

3) Create a function that fetches from [The Github API](https://developer.github.com/v3/). For example from [this page] (https://api.github.com/orgs/HackYourFuture/repos) (the one we used last week). For help on this check this [SO post](https://stackoverflow.com/questions/247483/http-get-request-in-javascript)

4) Display the data that you get from the Github API on your web page.

5) Now link the two together: When you click the button -> get the data from the Github API and display it on your website

6) Make all the repositories link their own page in Github. Use the value of the key: `name` to make this work (hint: Github urls always look like this https://api.github.com/repos/HackYourFuture/[repositoryName] where [repositoryName] would be replaced by the actual `name` of the repository, for example `CommandLine`). Make sure the link opens in a new tab.

7) BONUS: if you look at this:

```js
https://api.github.com/repos/HackYourFuture/CommandLine
```

You can see `CommandLine` in the URL. These are called "query parameters" and let us specify in detail what we want from the API. Play around with this. For example you can make two buttons that either get data for a specific repository, JavaScript or Node.js. Or go even more crazy and make users type in a search box 'JavaScript' and then send that to the API by changing the repository.


## Step 5: **Some freeCodeCamp challenges:**

1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Iterate over Arrays with map](https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map)

## Step 6: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week7/README.md) to prepare for your next class

_BONUS_ : Code Kata Race

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
