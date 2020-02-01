'use strict';

let myReadingList = [
  {
    title: 'Anna Karenina',
    author: 'Lev Tolstoy',
    alreadyRead: true,
  },
  {
    title: 'Romeo and Justice',
    author: 'William Shakespeare',
    alreadyRead: true,
  },
  {
    title: 'War and Peace',
    author: 'Lev Tolstoy',
    alreadyRead: false,
  },
];

for (let book of myReadingList) {
  console.log(`${book.title} by ${book.author}`);
  if (book.alreadyRead) {
    console.log(`You already read "${book.title}"`);
  } else {
    console.log(`You still need to read "${book.title}"`);
  }
  console.log(''); // I use this to make it more readable
}
