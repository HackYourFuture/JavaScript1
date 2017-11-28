## Homework Week 5

```
Topics discussed this week:
• Functions + JSON/Arrays
• Array Manipulations
• JSON
• Map and filter
• Arrow functions
```

>[Here](/Week5/README.md) you find the readings you have to complete before the sixth lecture.

## Step 1: Feedback

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
            newNumbers.push(numbers[i] * 2);
        }
    }

    console.log("The doubled numbers are", newNumbers); // [2, 6]

    ```

    Rewrite the above program using `map` and `filter` don't forget to use `=>`


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
            name     : 'Keep writing summary',
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

let tasks = monday.concat(tuesday);
```

2. Write a program that does the following below. Use `map` and `filter`. You will also need a `forEach` or a `for` loop for the 'summing up' part.

- Collect two days' worth of tasks.
- Convert the task durations to hours, instead of minutes.
- Filter out everything that took two hours or more
- Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.
- Output a formatted Euro amount.
- Don't forget to use `=>`

### Step 3: **Some freeCodeCamp challenges:**

_Deadline Saturday_

1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Iterate over Arrays with map](https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map)


### Step 4: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week5/README.md) to prepare for your next class


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

