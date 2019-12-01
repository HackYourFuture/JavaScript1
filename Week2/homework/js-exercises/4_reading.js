"use strict";

// 1. Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the `title` (string), `author` (string), and `alreadyRead` (boolean indicating if you read it yet).
const books = [
  {
    title: "Children of Time",
    author: "Adrian Tchaikovsky",
    isAlreadyRead: true
  },
  {
    title: "Dark Forest",
    author: "Liu Cixin",
    isAlreadyRead: false
  },
  {
    title: "The Institute",
    author: "Stephen King",
    isAlreadyRead: true
  }
];
// 2. Loop through the array of books.
// 3. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
for (let book of books) {
  console.log(`${book.title} by ${book.author}`);
  // 4. Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like `You already read "The Hobbit"` right after the log of the book details
  if (book.isAlreadyRead) {
    console.log(`You already read '${book.title}'`);
    // 5. If you haven't read it log a string like `You still need to read "The Lord of the Rings"`
  } else {
    console.log(`You still nedd to read '${book.title}'`);
  }
}
