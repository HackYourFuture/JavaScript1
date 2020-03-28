var booklist = [
    {
        'title' : 'Da Vinci Code',
        'author' : 'Dan Brown',
        'alreadyRead' : true
    }, 
    {
        'title' : 'Pet Semetary',
        'author' : 'Stephen King',
        'alreadyRead' : true
    }, 
    {
        'title' : 'Kurk Mantolu Madonna',
        'author' : 'Sabahattin Ali',
        'alreadyRead' : false
    }
];

for (let i=0;i<3;i++){
    console.log(`"${booklist[i].title} by ${booklist[i].author}".`);
    if (booklist[i].alreadyRead == true)
    console.log(`You already read "${booklist[i].title}"`);
    else
    console.log(`You still need to read "${booklist[i].title}"`);
}