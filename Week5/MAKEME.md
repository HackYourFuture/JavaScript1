## Homework Week 5

>[Here](https://github.com/HackYourFuture/JavaScript/tree/master/Week5/README.md) you find the readings you have to complete before the sixth lecture.

### Step 0
All share a video or a resource (this can be a drawing, article or a pod cast) that was helpful for you the last few weeks with learning JavaScript. Please share this in the channel of your class in Slack. Also write as small note about what the resource i about and why you think it's so helpful (you can share more than one if you like).

## Step 2: More map, filter, reduce, and =>

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

<!-- Change this into more fun data challenge -->
<!-- ## Step 2: Custom challenge 
1. Go to https://api.github.com/orgs/HackYourFuture/repos, you will see a list of the repositories our HYF organization has (yes it's a lot of JSON).
2. You can copy the JSON and put it in a string at the top of your `.js` file. Print the name of the 3rd repository in the array to the console.
3. Make a `<ul>` with a `<li>` for each repository name (just like you did with the books in the previous assignment).
4. It should only display the modules that are actually being used in the curriculum at the moment, you of course know which those are, but if you need a reminder you can find them in our [curriculum overview](https://github.com/HackYourFuture/curriculum).
5. Use CSS to divide the page in two columns. The left column will have a list of the names for repository. The right column should have the following information about each repository: the number of `stargazers`, the number of `watchers`, the number of `forks`, the `language` of the repository.
6. place the `avatar_url` (logo) of our organization somewhere on a nice place in your page. -->


### Step 2: Feedback
Give feedback on step 2 of the homework to one of your fellow classmates.

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

