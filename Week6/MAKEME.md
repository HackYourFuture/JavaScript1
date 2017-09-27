# Homework Week 6

>[Here](https://github.com/HackYourFuture/JavaScript/tree/master/Week6/README.md) you find the readings you have to complete before the fourth lecture.

### Git

1. Create a branch called `MyBranch` in the repository `MyFirst`.

2. Create the files `leaf1.txt`, `leaf2.txt`, `flower.txt` and `fruit.txt` and write some content in them.

3. Create a corresponding remote tracking branch on GitHub and push this branch to the Github remote you just created.

4. Merge `MyBranch` with the `master` branch

<!-- - Add your github/repositories link to [this slack file](https://slack-files.com/T0EJTUQ87-F5DAMGML5-cd687fd9b6) -->
- Fix the issues from the last week and make sure you explain how you fixed the issue in a comment (or commit message)
- Write a script that [polls this API](https://sunrise-sunset.org/api) every 3 seconds and passes a new date every time where date is previous day ++.

### Main assignment
You are going to write a SPA that uses the [Github API](https://developer.github.com/guides/getting-started/). Make sure that your app uses a logical pattern just like [this codepen](http://codepen.io/Razpudding/pen/MmVpeW).

__Requirements__:
- Make sure you handle user input well. That means you need to think about empty input, and input that doesn't yield any results.
- Do not duplicate code! This is especially important for making requests since we are making multiple ones with different urls and we want to do different actions based on the call we are making. Here are some handles to get you started:
  - So write a function called `makeRequest` which accepts (at least) the following parameters: `url` and `callback`.
  - Make sure your `callback` is called when the request errors or when it sends a response (look at the documentation)
  - Your `callback` functions should accept two parameters so it can handle both errors: `err` and `response`.
  So based on your users actions (input, hovering, clicking) you want to call `makeRequest` with a different `url` and supply it with a function that handles both errors (display an error message to the user for example) and responses (render it correctly, as described below). 
 - Make your functions small and reusable (modular)! That means create seperate functions to handle certain steps. 
  
1. Make a call to 'https://api.github.com/users/' + userInput (where userInput is a string typed into a searchfield by a user). You can do this by using some of the code of the previous week. Look at the response data.
2. show the users name, avatar image (not the link to the image!) and the number of public repos they have
3. When clicking on the users name, show all the other info you have about that user. When clicking on the avatar image, open their github profile in a new tab. When clicking on the number of public repos, make another API call to 'https://api.github.com/users/user/repos' and build an unorderdered list of the returned repos with just the name of each repo.
4. When hovering over the name of the repo, show on the right side of the page in an `<aside>` element the description of that repo, when it was created, and the number of open issues it has.
5. Change the function your previously wrote that handles the hovering event and add functionality to it that shows the collaborators of that repo. Note: to do this, you will need to make ANOTHER API call to https://api.github.com/repos/user/repo/events and that lists the 3 last events. Show the type of the event and if the type is 'PushEvent' show the commit message. Take a look at this [API call](https://api.github.com/repos/Razpudding/realtime-slack/events) to see some sample data.
6. Make sure that when a user goes to your app, your github account info is loaded. They can then use the search field to find info about other github accounts.
7. BONUS: Look through the data that Github sends back to you on your first API call and think about what other info would be usefull. Add more functionalities to your app like showing how many people starred a repositories or showing the names of the people followed by the current user.

```
How to hand in your homework:
• Upload your homework in your "hyf-javascript2" Github repository. Make sure to create a new folder "week3" first. 
• Upload your homework files inside the week3 folder and write a description for this “commit”.
• Your hyf-javascript2/week3 should now contain an index.html, main.css and a script.js file (and the images folder)
• Place the link to your repository folder in Trello.
```
