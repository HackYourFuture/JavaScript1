# Homework Week 7

```
Topics discussed this week:
• Object Oriented Programming
• Code flow (order of execution)
• Async VS Sync
```

>[Here](/Week7/README.md) you find the readings you have to complete before the eighth lecture.

## Step 1: Git Homework

[Make these assignments](https://github.com/HackYourFuture/Git/blob/master/Lecture-3.md). For handing in homework follow the Forking workflow that is described  in our lecture-3.md  file of HackYourFuture’s Git repository (there is also a video that explains this).

## Step 2: Give feedback on Step 3 and 4 of last weeks homework.

Give feedback on the SPA (Github API) and git branching homework of one of you fellow students. Please provide the feedback in an issue.

## Step 3: Issues

- Solve all your Git issues. DO NO CLOSE AN ISSUE WITHOUT AN EXPLANATION OR CODE COMMIT REFERENCING THAT ISSUE. 


### Step 2: Fix issues and API

- Fix the issues from the last week and make sure you explain how you fixed the issue in a comment (or commit message)


### Step 3: SPA :sweat_drops:
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

### Step 5: **Some freeCodeCamp challenges:**

1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Iterate over Arrays with map](https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map)

### Step 6: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week7/README.md) to prepare for your next class


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
