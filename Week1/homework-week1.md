Hi, We have made the homework at the class.
Me and @mehmet mehmetekinci worked together on this project and the result is shown on the following link:
https://github.com/rabrad/animals

Recap:

1. admin creates a new repository on github called **animals**:

   - Done by me as admin.

2. admin adds a file called “zoo.txt” with some animals generally found in a zoo:

   - mkdir animals
   - touch zoo.txt
   - echo "Lion" "Zepra" "heppo" > zoo.txt

3. admin commits and pushes the changes (in master branch):

   - git add .
   - git commit -m "Made file zoo.txt"

4. user forks the repository created by admin and bring it to their machine (covered during classwork):

   - forks the repository.
   - git cloan http://....

5. user makes a new branch called user-dev:

   - git branch user-dev

6. user adds another file called “pets.txt” with some animals generally found in a home:

   - touch pets.txt
   - echo "cat" "dog" "horse" > pets.txt

7. user commits and pushes his branch to remote:

   - git add .
   - git commit -m "Made file pets.txt"

8. user creates a pull request(PR) to merge changes from user's _user-dev_ branch to admin's _master_ branch:

   - Done by user on github.

9. admin reviews the pull request and approves and merges changes:

   - Done by admin on github
