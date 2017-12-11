# Homework Week 8

```
Topics discussed this week:
• Structure for a basic SPA
• XMLHttpRequests
• API calls
• Async VS Sync
```


>[Here](/Week8/README.md) you find the readings you have to complete before the ninth lecture.

## Step 1: Feedback

_Deadline Monday_

Please provide feedback in an issue.

_Deadline Monday_

## Step 2: FINISH ALL YOUR JAVASCRIPT HOMEWORK

_Deadline Saturday_

:point_up:

## Step 3: Async challenge

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



## Step 4: SPA :sweat_drops:

_Deadline Saturday_

You are going to write a SPA (Single Page Application) that uses the [Github API](https://developer.github.com/guides/getting-started/). Make sure that your app uses a logical pattern just like [this codepen](http://codepen.io/Razpudding/pen/MmVpeW).

Just like last week:

Make a website that fetches (= to get) data asynchronously.

1) Create a new website with external js file

2) Add a button (e.g. 'click me') that when clicked `console.logs` 'you clicked me!'

3) Create a function that fetches from [The Github API](https://developer.github.com/v3/). For example from [this page] (https://api.github.com/orgs/HackYourFuture/repos). For help on this check this [SO post](https://stackoverflow.com/questions/247483/http-get-request-in-javascript)

4) Display the data that you get from the Github API on your web page.

5) Now link the two together: When you click the button -> get the data from the Github API and display it on your website

Cool we are back where we left of.

6) Take a look at this:

```js
https://api.github.com/repos/HackYourFuture/CommandLine
```

7) Make a function which takes a single argument. The function should make an XHR request to `https://api.github.com/repos/HackYourFuture/[SearchTerm]` where the search term will be the argument. This argument will be the input the user has given you, so make sure that when the user clicks the button you call this function with the argument. 

8) Make all the repositories link their own page in Github. Use the value of the key: `name` to make this work (hint: Github urls always look like this https://api.github.com/repos/HackYourFuture/[repositoryName] where [repositoryName] would be replaced by the actual `name` of the repository, for example `CommandLine`). Make sure the link opens in a new tab.

- Make sure you handle user input well. That means you need to think about empty input, and input that doesn't yield any results.

So Github has this really nice documentation :octocat: :
Check these out for example
https://developer.github.com/v3/repos/collaborators/
https://developer.github.com/v3/repos/commits/

9) Extend your page with an input element. This is so the user will be able to type in text.

10) For each repository, show (in the right column) who the contributers are. You will need to use the `contributors_url` for this.

!Important
- Do not duplicate code! This is especially important for making requests since we are making multiple ones with different urls and we want to do different actions based on the call we are making. Here are some handles to get you started:
  - So write a function called `makeRequest` which accepts (at least) the following parameters: `url` and `callback`.
  - Make sure your `callback` is called when the request errors or when it sends a response (look at the documentation)
  - Your `callback` functions should accept two parameters so it can handle both errors: `err` and `response`.
  So based on your users actions (input, hovering, clicking) you want to call `makeRequest` with a different `url` and supply it with a function that handles both errors (display an error message to the user for example) and responses (render it correctly, as described below). 
 - Make your functions small and reusable (modular)! That means create separate functions to handle certain steps. 

11) GO WILD

Again, check out the Github API documentation to see what kind of magic stuff you can do with it.

The assignment is to implement something extra that is not in the assignment :scream: (nice and vague right?)

So for example, we have teams in our organization. You can find out who are in there and make a call to 'https://api.github.com/users/' + userInput (where userInput is a string typed into a search field by a user). You can show the users name, avatar image (not the link to the image!) and the number of public repos they have. Or you could make an API call to 'https://api.github.com/users/user/repos' to find out the public repo's they have. Or you can show how many people starred a specific repository. 

Anyway, endless fun and possibilities. Need inspiration, check out the Github API documentation. Oh and please make it look nice (hint: use the stuff you learned in HTML/CSS)!


_BONUS_ : Code Kata Race

- [Codewars](https://www.codewars.com/collections/hyf-homework-number-2)


## Step 5: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week8/README.md) to prepare for your next class

>Upload your homework in your "hyf-javascript3" Github repository. Make sure to create a new folder "week2" first. 
Upload your homework files inside the week2 folder and write a description for this “commit”.
Your hyf-javascript3/week2 should now contain all your homework files.
Place the link to your repository folder in Trello.