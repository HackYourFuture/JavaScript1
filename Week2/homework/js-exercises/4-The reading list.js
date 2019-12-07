'use strict'

let  myBooks = [
    {
        title: '21 lesson for the 21st century',
        author:'Harari',
        alreadyRead:false,
    },
    {
        title: 'Origin',
        author: 'Dan brown',
        alreadyRead:true,
    },
    {
        title: 'Becoming',
        author:'Michelle obama',
        alreadyRead:false,
    }
];


  
myBooks.forEach(function(myBooks) {
    console.log(`${myBooks.title} By ${myBooks.author}`);
  });

// here we have a long way and short way :

    // if(myBooks[0].alreadyRead === true){
    //     console.log(`You already read "${myBooks[0].title}"`)
    // }else{
    //     console.log(`You still need to read "${myBooks[0].title}"`);
    // };
    // if(myBooks[1].alreadyRead === true){
    //     console.log(`You already read "${myBooks[1].title}"`)
    // }else{
    //     console.log(`You still need to read "${myBooks[1].title}"`);
    // };
    // if(myBooks[2].alreadyRead === true){
    //     console.log(`You already read  "${myBooks[2].title}"`)
    // }else{
    //     console.log(`You still need to read "${myBooks[2].title}"`);
    // }


// in the other way forEach

myBooks.forEach(function(myBooks) {
    if (myBooks.alreadyRead == true) {
        console.log(`You already read "${myBooks.title}"`);
      } else {
        console.log(`You still need to read "${myBooks.title}"`);
      }
  });