'use strict';
let books =[{
    title: 'pride & prejudice',
    author: 'Jane Austin',
    alreadyRead: true
}, {
    title: 'If tommorow comes',
        author: 'Sydney Sheldon',
        alreadyRead: true

    },
    {
    title: 'Master of the game',
    author: 'Sydney Sheldon',
    alreadyRead: false
    }
]
let x;
for (x of books){
    if(x['alreadyRead']===true){
        console.log('You already read '+ x.title);
    }
    else{
        console.log('You still need to read '+ x.title);
    }
}