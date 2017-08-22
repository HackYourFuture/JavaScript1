# Homework Week 4

## Read:
- https://github.com/HackYourFuture/JavaScript/blob/master/Week4/README.md

## Challenges:
- https://www.freecodecamp.com/challenges/using-objects-for-lookups
- https://www.freecodecamp.com/challenges/manipulating-complex-objects
- https://www.freecodecamp.com/challenges/convert-json-data-to-html

### Custom Challenge

In the HYF Movies Hands-On, we created the function `sortByImdbRating(movies)` to sort the list of movies by IMDB rating. Replace this function by a generalised version that takes the name of the property (`propName`) to sort on and a number `order` (allowed values 1 or -1, default value = 1) to indicate respectively ascending or descending sort order:

```js
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

