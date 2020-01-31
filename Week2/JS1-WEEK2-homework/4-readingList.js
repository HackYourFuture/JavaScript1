// Exercise 4: The reading list

// Keep track of which books you read and which books you want to read!

// Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), 
// author (string), and alreadyRead (boolean indicating if you read it yet).
// Loop through the array of books.
// For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like 
// You already read "The Hobbit" right after the log of the book details
// If you haven't read it log a string like You still need to read "The Lord of the Rings"

'use strict'

let myLibrary = [{

        title: '1984',
        author: 'George Orwell',
        alreadyRead: false,
    },

    {
        title: 'A Tale Of Two Cities',
        author: 'Charles Dickens',
        alreadyRead: true,
    },

    {
        title: 'The Art Of War',
        author: 'Sun Tzu',
        alreadyRead: true,
    },
];


for (let theBook of myLibrary) {

    console.log(`${theBook.title} by ${theBook.author}`);

    if (theBook.alreadyRead) {

        console.log("You already read " + theBook.title);

    } else {
        console.log("You still need to read " + theBook.title);

    }

}