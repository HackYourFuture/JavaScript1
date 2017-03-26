# Homework week 6

Finish homework week 5: https://github.com/HackYourFuture/JavaScript/blob/master/Week5/MAKEME.md and hand in the link to your Github Repository in Trello

Read through the JavaScript Fundamentals [README](https://github.com/HackYourFuture/JavaScript/tree/master/fundamentals) and make the [exercises](https://github.com/HackYourFuture/JavaScript/blob/master/fundamentals/exercises.md) hand in your answers in Trello.

ASK A QUESTION ON SLACK!!!!

## Homework from class
Create a repo that makes this code work, implies an html file and a js file.
```
fetchReposFromOrganization('hackyourfuture')
  .then(renderListOfRepositories)
  .then(fetchContributors)
  .then(renderContributors);
```

Make sure you authenticate the request with a **token**, [Create a new token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).
You should be able to achieve with somenthing like:
```
request.setRequestHeader("Authorization", "token " + TOKEN);
```

**IMPORTANT REQUIREMENT**
*We're assuming that you know that **TOKEN is a precious piece of data**.
You've to make sure that you **never publish your TOKEN** openly!*

*Tip:*
A way of solving, could be, creating an input where I to fill the personal token. Maybe use [Local Storage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage) so when we come back is already set.
You can find also start to look at stuff like: [How to get value from input](http://stackoverflow.com/questions/11563638/javascript-how-to-get-value-of-text-input-field).. etc...
