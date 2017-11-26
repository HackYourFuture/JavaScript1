## Homework Week 5

>[Here](https://github.com/HackYourFuture/JavaScript/tree/master/Week5/README.md) you find the readings you have to complete before the sixth lecture.

## Step1: Feedback

_Deadline Monday_

Go through the `html-css`, `javascript1` and `javascript2` Github repositories of one of your fellow students, check if they have neat repository's with the different weeks (eg. `week1`, `week2`, `week3`)of homework for all the modules up and until now. Also check if they have hosted their homework on Github pages. If there is anything that they can improve please provide feedback in an issue.

## Step 2: More map, filter and `=>`

_Deadline Wednesday_

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
            name     : 'Fix homework for class10',
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

### Step 3: **Some freeCodeCamp challenges:**

_Deadline Saturday_

1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Iterate over Arrays with map](https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map)


```
How to hand in your homework:
• Clone your existing "hyf-javascript2" Github repository.
• Create a new folder "week2" USING THE COMMAND LINE 
• Save your homework files inside this folder. 
• When you are done with your homework use add/commit and push to upload your homework. 
• Write a description for your “commit”.
• Your hyf-javascript2/week2 should now contain all your homework files.
Place the link to your repository folder in Trello.
```

