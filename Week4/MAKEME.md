# Homework Week 4

>[Here](https://github.com/HackYourFuture/JavaScript/tree/master/Week4/README.md) you find the readings you have to complete before the fourth lecture.

## Step 0: 
Give yourself (or your neighbor) a little tap on the shoulder, you've made it to JS2! :muscle:

## Step 1: Some Challenges
Let's practise working with Objects and Arrays. Go to FreeCodeCamp and complete all challenges under "Object Oriented and Functional Programming" and the _first four challenges_ under "Basic Algorithm Scripting", up until 'Find the longest word in a string.'

## Step 2: Custom challenge 
1. Go to http://www.omdbapi.com/?s=dog and change the word dog in the url to a different common word. You will get as a result, a list of movies with this word in the title. Make sure you get at least 5 results.
2. You can copy the JSON and put it in a string at the top of your js file. Print the title of the 3rd movie in the array to the console.
3. Make a ul with a li for each title (just like you did with the books in the previous assignment
4. Use CSS to divide the page in two columns. The left column will have a list of the titles for each movie. The right column will have all the information listed for each movie.
5. Replace the "Poster" property with the actual image of the poster. If you do this correctly, in the right column there will be a picture for each movie.
6. Use the imdbID to create an URL to the IMDB page for that movie (hint: IMDB urls always look like this http://www.imdb.com/title/[imdbId] where [imdbId] would be replaced by the actual Id. If you do this correctly, each movie will have a link to its own IMDB page. Make sure the link opens in a new tab

## Step 3:

Give one of you fellow students in Github feedback about their code of step two, create an issue in their repo, telling them what they did great and what they can improve.

## Step 4: Almost there...

Created a function `sortByImdbRating(movies)` to sort the list of movies by IMDB rating. 

### :boom: Bonus homework :boom:

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
2. It is not necessary to convert property values containing dates or numbers formatted with embedded commas to facilitate sorting for this challenge (but you're welcome to try). You can leave the value 'as is'.

:octocat: 
```
How to hand in your homework:
• Create a new repository "hyf-javascript2". Also create a new folder "week1" inside this repository. 
• Upload your homework files inside the week1 folder and write a description for this “commit”.
• Your hyf-javascript2/week1 should now contain the files of your homework.
• Place the link to your repository folder in Trello.
```

