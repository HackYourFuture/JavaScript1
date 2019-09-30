function gradeCalculator(score) {   // This function calculate the grade


    if (score * 10 % 2 !== 0) {     // check the parameter if it is not a number

        let newScore = prompt(" The value that you enterd is not a number, Please Enter Your Score :");
        return gradeCalculator(newScore);

    }

    else if (score * 10 % 2 === 0) {       // check the parameter if it is a number

        if (score < 0 || score > 100) {

            let newScore = prompt("You have been entered an invalid value, Please Enter a valid Score :");
            return gradeCalculator(newScore);

        }

        else if (score >= 0 && score <= 100) {

            if (score >=90 && score <= 100) {
                return "You got a A (" + score + "%)!";
            }
            
            else if (score >=80 && score <= 89) {
                return "You got a B (" + score + "%)!";
            }

            else if (score >=70 && score <= 79) {
                return "You got a C (" + score + "%)!";
            }

            else if (score >=60 && score <= 69) {
                return "You got a D (" + score + "%)!";
            }

            else if (score >=50 && score <= 59) {
                return "You got a E (" + score + "%)!";
            }

            else if (score >=0 && score <= 49) {
                return "You got a F (" + score + "%)!";
            }
        }
    }
};

let studentScore = prompt("Please Enter Your Score :");

gradeCalculator(studentScore);