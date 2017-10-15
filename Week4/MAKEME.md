# Homework Week 4

>[Here](https://github.com/HackYourFuture/JavaScript/tree/master/Week4/README.md) you find the readings you have to complete before the fifth lecture.

## Step 0: 
Give yourself (or your neighbour) a little tap on the shoulder, you've made it to JS2! :muscle:

## Step 1: Some Challenges
Let's practice working with Objects and Arrays. Go to FreeCodeCamp and complete all challenges under "Object Oriented and Functional Programming" and the _first four challenges_ under "Basic Algorithm Scripting", up until 'Find the longest word in a string.'

## Step 2: Custom challenge 
1. Go to https://api.github.com/orgs/HackYourFuture/repos, you will see a list of the repositories our HYF organization has (yes it's a lot of JSON).
2. You can copy the JSON and put it in a string at the top of your `.js` file. Print the name of the 3rd repository in the array to the console.
3. Make a `<ul>` with a `<li>` for each repository name (just like you did with the books in the previous assignment).
4. It should only display the modules that are actually being used in the curriculum at the moment, you of course know which those are, but if you need a reminder you can find them in our [curriculum overview](https://github.com/HackYourFuture/curriculum).
5. Use CSS to divide the page in two columns. The left column will have a list of the names for repository. The right column should have the following information about each repository: the number of `stargazers`, the number of `watchers`, the number of `forks`, the `language` of the repository.
6. place the `avatar_url` (logo) of our organization somewhere on a nice place in your page.

## Step 3: Feedback

Give one of you fellow students in Github feedback about their code of step two, create an issue in their repo, telling them what they did great and what they can improve.

<!-- ### :boom: Bonus homework :boom:

Replace this function by a generalised version that takes the name of the property (`propName`) to sort on and a number `order` (allowed values 1 or -1, default value = 1) to indicate respectively ascending or descending sort order:

```
function sortMovies(movies, propName, order)
```

Hint: remember from your high school math that:

- `1 x -1 = -1`, and
- `-1 x -1 = 1`

Ensure that the new function produces the same results as the existing `sortByImdbRating` function when it is called like this:

```js
movies = sortMovies(movies, 'imdbRating', -1);
```

Notes:

1. Do not bother to make this work for the `Ratings` property which refers to an object rather than a simple value.
2. It is not necessary to convert property values containing dates or numbers formatted with embedded commas to facilitate sorting for this challenge (but you're welcome to try). You can leave the value 'as is'. -->

:octocat: 
```
How to hand in your homework:
• Create a new repository "hyf-javascript2". Also create a new folder "week1" inside this repository. 
• Upload your homework files inside the week1 folder and write a description for this “commit”.
• Your hyf-javascript2/week1 should now contain the files of your homework.
• Place the link to your repository folder in Trello.
```

