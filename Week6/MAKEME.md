# Homework Week 6
- Add your github/repositories link to the pinned slack file
- Fix the issues from the last week and make sure you explain how you fixed the issue in a comment (or commit message)
- Write a script that [polls this API](https://sunrise-sunset.org/api) every 3 seconds and passes a new date everytime where date is previous day ++.

### Main assignment
You are going to write a SPA that uses the [Github API](https://developer.github.com/guides/getting-started/). Make sure that your app uses a logical pattern just like [this codepen](http://codepen.io/Razpudding/pen/MmVpeW).

1. Make a call to 'https://api.github.com/users/' + userInput (where userInput is a string typed into a searchfield by a user). You can do this by using some of the code of the previous week. Look at the response data.
2. show the users name, avatar image (not the link to the image!) and the number of public repos they have
3. When clicking on the users name, show all the other info you have about that user. When clicking on the avatar image, open their github profile in a new tab. When clicking on the number of public repos, make another API call to 'https://api.github.com/users/user/repos' and build an unorderdered list of the returned repos with just the name of each repo.
4. When hovering over the name of the repo, show on the right side of the page in an `<aside>` element the description of that repo, when it was created, and the number of open issues it has.
5. Change the function your previously wrote that handles the hovering event and add functionality to it that shows the collaborators of that repo. Note: to do this, you will need to make ANOTHER API call to https://api.github.com/repos/user/repo/events and that lists the 3 last events. Show the type of the event and if the type is 'PushEvent' show the commit message. Take a look at this [API call](https://api.github.com/repos/Razpudding/realtime-slack/events) to see some sample data.
6. Make sure that when a user goes to your app, your github account info is loaded. They can then use the search field to find info about other github accounts.
7. BONUS: Look through the data that Github sends back to you on your first API call and think about what other info would be usefull. Add more functionalities to your app like showing how many people starred a repositories or showing the names of the people followed by the current user.
