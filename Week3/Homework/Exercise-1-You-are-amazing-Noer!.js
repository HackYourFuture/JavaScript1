function giveCompliment(yourName) {
    const complimentsArray = ["Great", "Awesome", "Well", "Genius", "Excellent", "Nice", "Beautiful", "Amazing", "honest", "Frindly"];
    const randomCompliment = Math.floor(Math.random() * complimentsArray.length);
    return "You are " + complimentsArray[randomCompliment] + " " + yourName;
};

console.log(giveCompliment("Ahmad"));  

console.log(giveCompliment("Robin"));

console.log(giveCompliment("Gerard"));