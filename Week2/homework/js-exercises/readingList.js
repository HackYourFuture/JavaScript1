"use strict";
//declare a variable that holds an array of 3 objects
let bookList = [ { title : "The Hunger Game" , author : "Suzanne Collins" , alreadyRead: false } , 
                 { title : "The Da Vinci Code" , author : "Dan Brown" , alreadyRead: true } , 
                 { title : "A Song Of Ice And Fire" , author : "George R.R. Martin" , alreadyRead: false }]
//log the book title and book author
let book;
for (book of bookList){
    console.log(`${book.title} by ${book.author}`);
}
//log the book depending on whether you read it yet or not
for (book of bookList) {
    if( book.alreadyRead === true )
    console.log(`You already read ${book.title} by ${book.author} `);
    else 
    console.log(`You still need to read ${book.title} by ${book.author} `);
}