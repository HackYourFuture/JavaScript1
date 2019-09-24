'use strict';

const books = [{'title':'Paycheck','author':'Philip.K.Dick','alreadyRead':true},
{'title':'Efrasiyabin Hikayeleri','author':'Ihsan Oktay Anar','alreadyRead':true},
{'title':'Ask','author':'Elif Safak','alreadyRead':false}];

for(let i = 0; i < books.length; i++){

   let titleBooks = books[i].title;
   let authorBooks = books[i].author;
   let alreadyReadBooks = books[i].alreadyRead;
   if (alreadyReadBooks === true) {
       console.log(titleBooks + ' by ' + authorBooks);
      console.log('You already read ' +titleBooks); 
   }
      else { console.log(titleBooks + ' by ' + authorBooks);
      console.log('You still need to read ' + titleBooks);
   }
}

