'use strict'
const readingList = [
    {
        title: 'The Trial',
        author: 'Franz Kafka',
        alreadyRead : true
    },
    {
        title: 'Lord of the Flies',
        author: 'William Golding',
        alreadyRead : true
    },
    {
        title: 'Praise of Folly',
        author: 'Erasmus',
        alreadyRead : false
    }
    
]

for(let i = 0; i < readingList.length; i++) {
    if(readingList[i].alreadyRead === true){
        console.log(`${readingList[i].title} by ${readingList[i].author}. You already read "${readingList[i].title}".`)
    } else {
        console.log(`${readingList[i].title} by ${readingList[i].author}. You still need to read "${readingList[i].title}".`)
    }
}

