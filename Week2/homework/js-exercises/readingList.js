let booksList=[
{
    title:'Disappearing Earth',
    author:'Julia Phillips',
    alreadyRead:true
},
{
    title:'The Topeka School',
    author:'Ben Lerner',
    alreadyRead:false
},
{
    title:'Lost Children Archive',
    author:'Valeria Luiselli',
    alreadyRead:true
}];

for(let books=0; books< booksList.length; books++)
{

    if(booksList[books].alreadyRead ){
        console.log(booksList[books].title +' by ' + booksList[books].author + 'You have already read ' +'" '+ booksList[books].title +' "');
    }else{
        console.log('You still need to read ' + booksList[books].title +' by ' + booksList[books].author); 

    }
    
}
