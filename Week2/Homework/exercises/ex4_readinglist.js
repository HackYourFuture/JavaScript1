"use strict";

const readingList = [
  { title: "A History of the World", author: "Andrew Marr", alreadyRead: true },
  { title: "Head of State", author: "Andrew Marr", alreadyRead: false }
];

for (let i = 0; i < readingList.length; i++) {
  let book = readingList[i];
  let bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}
