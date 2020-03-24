'use strict';

let bookArray =[
    {title: "Huzur" , author : "Ahmet Hamdi Tampinar", alreadyRead : true},
    {title: "Blindness" , author : "José Saramago", alreadyRead : true},
    {title: "When Nietzsche Wept" , author : "Irvin D. Yalom", alreadyRead :false}
];


bookArray.forEach(element => console.log(element.title + " by " + element.author));

bookArray.forEach(element => 
    {
        if(element.alreadyRead){

            console.log("You already read \""+element.title+"\"");

        }else{
            console.log("You still need to read \""+element.title+"\"");
        }
    });
  