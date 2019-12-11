function giveCompliment(myName) {
    const compliment = [
        "GREAT",
        "Awesome",
        "Fantastic",
        "So COOL",
        "Excellent",
        "the best",
        "AMAZING",
        "Nice",
        "Wonderful",
        "Superhero"
    ];
    let randomCopliment = Math.floor(Math.random() * 10);
    let message = "";
    message = "You are " + compliment[randomCopliment] + " Today " + myName + "!";
    return message;
}

console.log(giveCompliment("naji"));
console.log(giveCompliment("naji"));
console.log(giveCompliment("naji"));