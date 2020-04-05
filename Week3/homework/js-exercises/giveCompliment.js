

const Compliment=['Great','Awesome','Smart Cookie','Strong','The best','Good','Courageous','beautiful'];
//function giving random compliment
function giveCompliment(yourName){
    const  randomGreeting=Compliment[Math.floor(Math.random() * Compliment.length)]; 
    return "You are " +randomGreeting+' '+ yourName + "!";
    // console.log("You are " +randomGreeting+' '+ yourName + "!");
}
giveCompliment('Adam')
giveCompliment('Ahmed')
giveCompliment('Ahmed')
