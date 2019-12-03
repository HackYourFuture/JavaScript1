'use stirct';

let books = [
    book1 = { 
        name: '1984',
        author: "George Orwell",
        alreadyRead: true,
    },
    book2 = {
        name: 'Nomral People',
        author: "Sally Rooney",
        alreadyRead: false,
    },
    book3 = {
        name: 'The Bolds',
        author: "Julian Clary",
        alreadyRead: true,
    }
]

for (let i = 0; i < books.length ; i++){
    console.log(`${books[i].name} by ${books[i].author}`);
    if (books[i].alreadyRead) {
        console.log(`Good job!
        You already read ${books[i].name}`);}
        else {console.log(`You still need to read ${books[i].name} dude!`)}
        
    }
    
