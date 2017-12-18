# Homework Week 9

```
Topics discussed this week:
• (re)writing data structures (in JSON)
• Async VS Sync 
• Code flow (order of execution)
```

## Step 1: Read

- If you need to refresh your memory on es6 classes: [es6-classes-in-depth](https://ponyfoo.com/articles/es6-classes-in-depth)
- Also read this article on scopes & closures: [explaining-javascript-scope-and-closures](https://robertnyman.com/2008/10/09/explaining-javascript-scope-and-closures/)

## Step 2: Feedback

- Create at least 2 issues (bug / feature / code improvement) on another teams github repository. Do this in pairs. 
-  Solve the issue proposed by another students in your github repo. More info [here](https://hackyourfuture.slack.com/files/michahell/F31BX1XT6/Merging_a_local_branch_into_master)

## Step 3: Pair programming promises challenge 

This week you will work in a team!

So please:

- (one of your team mates should) Fork this repository: https://github.com/HackYourFuture/PromisessObjectsAndStringRendering
- make sure you are all collaborators on the same repository
- Follow the instructions in the REAME.md of the above repository
- To hand in your homework you make a PR to the existing repository

## Step 4: Async challenge

_Deadline Saturday_

1. Rewrite the code below to Async: 

```js
1.

let sum = calculateSum(2, 6);
console.log(sum);

2.

let results = $.getJSON('http://myapi.com');
showResults(results);

3.

let sum = calculateSum(2, 6);
if (sum > 8) {
    console.log('larger than 8');
}

4.

let data = $.getJSON('http://myapi.com');
data = data.map(function (x) { return x * 8; });

writeDataToFile(data);
```

## Step 5: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week9/README.md) to prepare for your next class

> To hand in your homework, make a pull request to the original repository you forked from. Remember, our master branches are protected, you cannot push to a directly cloned repository you first have to make a fork to your own Github.
