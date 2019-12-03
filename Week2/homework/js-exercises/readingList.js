'use strict';

const myReadingList = [
  {
    title: 'Alchemist',
    author: 'Paulo Chello',
    alreadyRead: true
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    alreadyRead: false
  },
  {
    title: 'The 40 rules of Love',
    author: 'Elif Shafak',
    alreadyRead: true
  }
];

for (let book of myReadingList) {
  console.log(`${book.title} by ${book.author}`);
  if (book.alreadyRead === true) {
    console.log(`You already read ${book.title}\n`);
  } else {
    console.log(`You still need to read ${book.title}\n`);
  }
}
