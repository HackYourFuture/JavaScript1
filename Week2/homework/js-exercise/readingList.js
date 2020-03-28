"use strict";
let books = [
  {
    title: "War and Peace",
    author: "Tolstoy",
    alreadyRead: true
  },
  {
    title: "Zorba",
    author: "Nikos Kazancakis",
    alreadyRead: true
  },
  {
    title: "Divine Comedy",
    author: "Dante",
    alreadyRead: false
  }
];

for (var item in books) {
  console.log(books[item].title + " by " + books[item].author);
}

for (var item in books) {
  if (books[item].alreadyRead === true) {
    console.log(books[item]);
    console.log("You already read " + books[item].title);
  } else {
    console.log("You still need to read " + books[item].title);
  }
}
