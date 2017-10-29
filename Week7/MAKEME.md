# Homework Week 7

>[Here](https://github.com/HackYourFuture/JavaScript/tree/master/Week7/README.md) you find the readings you have to complete before the eighth lecture.

## Step 1: Git Homework

[Make these assignments](https://github.com/HackYourFuture/Git/blob/master/Lecture-3.md). For handing in homework follow the Forking workflow that is described  in our lecture-3.md  file of HackYourFuture’s Git repository (there is also a video that explains this).

## Step 2: Give feedback on Step 3 and 4 of last weeks homework.

Give feedback on the SPA (Github API) and git branching homework of one of you fellow students. Please provide the feedback in an issue.

## Step 3: Issues

- Solve all your Git issues. DO NO CLOSE AN ISSUE WITHOUT AN EXPLANATION OR CODE COMMIT REFERENCING THAT ISSUE. 

## Step 4: map, filter, reduce

- Add map, filter, reduce to  your existing app to build an application that loads data from github, filters out based on certain value, map->reduces to a data object and render that object to the dom (using map again).
- For example you can try to use map, filter and reduce to show the most and the least forked repositories, watched repositories. And the total number of forks for all repo's. Also you can work with the data provided about the amount of commits or contributers.
<!-- - Add polling to your app so that it checks every minute or so if a new repo has been made and if it has, adds it to the DOM without reloading the page. -->
- Add a readme to your repo explaining  what your app does and how to use your app. Here's a [template](https://gist.github.com/jxson/1784669) and here you can see how to make [your readme awesome](https://gist.github.com/rrgayhart/91bba7bb39ea60136e5c).

### Step 5: **Some freeCodeCamp challenges:**

1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Iterate over Arrays with map](https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map)

## Step 6: More map, filter, reduce, and =>

1. Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

Your solution could be something like this:
```js
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

```

rewrite the above program using `map` and `filter` don't forget to use `=>`

2. Use the array of the previous assignment, write a program that add the even numbers to the resulting array twice, but the odd numbers only once. Don't forget to use `=>`.

Your output should be:
```js
console.log("The final numbers are", newNumbers);// [1, 2, 2, 3, 4, 4]
```

Underneath you see a very interesting small insight in Maartje's work:
```js
let monday = [
        {
            name     : 'Write a summary HTML/CSS',
            duration : 180
        },
        {
            name     : 'Some web development',
            duration : 120
        },
        {
            name     : 'Try to convince teachers to fix homework class10',
            duration : 30
        },
        {
            name     : 'Fix homework for class10 myself',
            duration : 20
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        }
    ];
 
let tuesday = [
        {
            name     : 'Keep writing summery',
            duration : 240
        },
        {
            name     : 'Some more web development',
            duration : 180
        },
        {
            name     : 'Staring out the window',
            duration  : 10
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        },
        {
            name     : 'Look at application assignments new students',
            duration : 40
        }
    ];
     
let tasks = [monday, tuesday];
```

3. Write a program that does the following:

- Collect two days' worth of tasks.
- Convert the task durations to hours, instead of minutes.
- Filter out everything that took two hours or more.
- Sum it all up.
- Multiply the result by a per-hour rate for billing (you can decide yourself what Maartje should make per hour).
- Output a formatted Euro amount.
- Don't forget to use `=>`

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
