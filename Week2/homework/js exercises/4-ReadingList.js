//Declare a variable that holds an array of 3 objects, 
//where each object describes a book and has properties 
//for the title (string), author (string), and 
//alreadyRead (boolean indicating if you read it yet).

const myBooks = [
	{
		title: "Book1",
		author: "Author1", 
		finished: true
	},
	{
		title: "Book2",
		author: "Author2", 
		finished: true
	},
	{
		title: "Book3",
		author: "Author3", 
		finished: false
	},
]; 
	
//Loop through the array of books.
for(item of myBooks) {
	console.log(item);
}
//For each book, log the book title and book 
//author like so: "The Hobbit by J.R.R. Tolkien".

for(item of myBooks) {
	console.log(item['title'] + ' by ' + item['author']);
}
//Create a conditional statement to change 
//the log depending on whether you read it yet or not.
//If you read it, log a string like You already read 
//"The Hobbit" right after the log of the book details

for(item of myBooks) {
	if (item.finished === true) {
		console.log("You already read " + item['title']+ "!");	
	}
	else {console.log("You still need to read " + item['title'] + "!");
}	
}
//If you haven't read it log a string like 
//You still need to read "The Lord of the Rings"