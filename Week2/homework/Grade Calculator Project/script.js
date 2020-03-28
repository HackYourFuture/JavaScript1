function gradeCalc(grade) {
// if grade is less than 50, e.g. 44, our function gradeCalc 
//will return "You got an F (%44)!"
	if (grade < 50) {
return "You got an F " + "\(%" + grade + "\)!";
	}
// if grade is more than 49, and if it is less than 60, our function gradeCalc 
//will return "You got an E (%grade)!"
	else if (grade < 60) {
return "You got an E " + "\(%" + grade + "\)!";//"You got an E (%grade)!"
	}
	else if (grade < 70) {
return "You got a D " + "\(%" + grade + "\)!";
	}
	else if (grade < 80) {
return "You got a C " + "\(%" + grade + "\)!";
	}
	else if (grade < 90) {
return "You got a B " + "\(%" + grade + "\)!";
	}
	else if (grade <= 100) {
return "You got an A " + "\(%" + grade + "\)!";
	}
	else {
return"Please enter your grade between 0 and 100!";
	}
}


console.log(gradeCalc(7));
console.log(gradeCalc(55));
console.log(gradeCalc(60));
console.log(gradeCalc(70));
console.log(gradeCalc(88));
console.log(gradeCalc(97));



//***BONUS!!! ***
//THE SAME CALCULATION WITH PROMPT
//TO BE USED IN THE BROWSER.


let grade = prompt("Enter your grade in number.")

	if (grade < 50) {
alert("You got an F " + "\(%" + grade + "\)! See you next year!");
	}
	else if (grade < 60) {
alert("You got an E " + "\(%" + grade+ "\)!");
	}
	else if (grade < 70) {
alert("You got a D " + "\(%" + grade + "\)! Do it better next time!");
	}
	else if (grade < 80) {
alert("You got a C " + "\(%" + grade + "\)! Good job!");
	}
	else if (grade < 90) {
alert("You got a B " + "\(%" + grade + "\)! Congratulations!");
	}
	else if (grade <= 100) {
alert("You got an A " + "\(%" + grade + "\)! Congratulations!");
	}
	else {
	alert("Please enter your grade between 0 and 100!");
	}



switch (grade){
		case 50:
			alert("You got F!");
			break;
		case 60:
			alert("You got E!");
			break;
		case  70:
			alert("You got D!");
			break;
		case 80:
			alert("You got C!");
			break;
		case 90:
			alert("You got B!");
			break;
		case 100:
			alert("You got A!");
			break;
	}



// When writing the function, make use of the following grade scores:

// Grade A (90% - 100%)
// Grade B (80% - 89%)
// Grade C (70% - 79%)
// Grade D (60% - 69%)
// Grade E (50% - 59%)
// Grade F (0% - 49%)
