let bookList = [
  {
    Title: "Blindside",
    Author: "James Patterson and James O. Born",
    alreadyRead: false
  },
  {
    Title: "12 Rules for Life: An Antidote for Chaos",
    Author: "Jordan B. Peterson",
    alreadyRead: true
  },
  {
    Title: "Sapiens: A Brief History of Humankind",
    Author: "Yuval Noah Harari",
    alreadyRead: true
  }
];
for (let i=0; i<bookList.length; i++) {
  console.log(`${bookList[i].Title} by ${bookList[i].Author}`)
  bookList[i].alreadyRead===true ? console.log(`You already read ${bookList[i].Title}`): console.log(`You still need to read ${bookList[i].Title}`);
}