'use strict';
let books = [
  {
    title: 'Diana, Her true story ',
    author: 'Andrew Morton ',
    alreadyRead: true,
  },
  {
    title: 'A Thousand Splendid Sun ',
    author: 'Khaled Hosseini ',
    alreadyRead: false,
  },
  { title: 'the secret ', author: 'Paulo Coelho ', alreadyRead: true },
];
let book;
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}
books.forEach(function(obj) {
  console.log(obj.title + 'by ' + obj.author);
});

for (book of books) {
  if (book.alreadyRead === true) {
    console.log('you already read the ' + book.title);
  } else {
    console.log('You still need to read ' + book.title);
  }
}
