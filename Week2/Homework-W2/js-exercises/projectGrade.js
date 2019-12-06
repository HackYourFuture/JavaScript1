'use strict';
function convertScoreToGrade(score) {
	let output;

	switch (typeof score === 'number') {
		case score >= 90 && score <= 100: //You got A ...
			output = 'A';
			break;
		case score >= 80 && score <= 89: //You got B ...
			output = 'B';
			break;
		case score >= 70 && score <= 79: //You got C ...
			output = 'C';
			break;
		case score >= 60 && score <= 69: //You got D ...
			output = 'D';
			break;
		case score >= 50 && score <= 59: //You got E ...
			output = 'E';
			break;
		case score >= 0 && score <= 49: //You got F ...
			output = 'F';
			break;
		default:
			output = 'INVAILD SCORE';
	}
	return `You got a ${output} ${score}%`; // returen (output) + (score)
}

let i = Math.floor(Math.random() * 100 + 1); // returns a random integer from 1 to 100
console.log(convertScoreToGrade(i));
