// 'use strict'
// 1. Declare a variable that holds an array of 3 objects, where each object describes a book and has properties
// for the`title`(string), `author`(string), and`'alreadyRead'`(boolean indicating if you read it yet).

const myBooks = [
    { title: 'Life', author: 'Adam', alreadyRead: true },
    { title: 'Love', author: 'Eva',  alreadyRead: false },
    { title: 'Hope', author: 'Noah', alreadyRead: true }
  ]
// 2. Loop through the array of books.

// first solution
myBooks.forEach((myBooks) => console.log(myBooks.title, myBooks.author));

// second solution
for (let i = 0; i < myBooks.length; i++) {
    console.log(myBooks)
}


// 3. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
for (let book of myBooks) {
    console.log(book.title + ' By ' + book.author)
}
// 4. Create a conditional statement to change the log depending on whether you read it yet or not.If you read it, log a string like`You already read "The Hobbit"` right after the log of the book details
// 5. If you haven't read it log a string like `You still need to read "The Lord of the Rings"`

myBooks.forEach(function (myBooks) {
    console.log(`${myBooks.title} By ${myBooks.author}`);
    if (myBooks.alreadyRead == true) {
        console.log(`You already read "${myBooks.title}"`);
    } else {
        console.log(`You still need to read "${myBooks.title}"`);
    }
});








//     ** Exercise 4: The reading list **

// Keep track of which books you read and which books you want to read!

//  
// 

