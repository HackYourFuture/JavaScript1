'use strict';

const footballTeam = ['Goalkeeper', 'Defense player', 'Midfielder', 'Attack player'];
const professionalFootballTeam = ['Goalkeeper','Sweeper (libero)','Defense player', 'Midfielder','Centre forward', 'Attack player'];

console.log('The length of the first array is ...' + footballTeam.length);
console.log('The length of the second array is ...' + professionalFootballTeam.length);



if(footballTeam.length === professionalFootballTeam.length){

    console.log('They are the same size!');

}else if(footballTeam.length > professionalFootballTeam.length){

    console.log(footballTeam.length + 'is smaller than '+professionalFootballTeam.length);

}else{

    console.log(professionalFootballTeam.length + ' is Bigger than ' + footballTeam.length);
}