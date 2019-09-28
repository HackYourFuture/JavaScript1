"use strict"

/* the function below is to turn the score into percentual*/
function perc (score, total) {
    return score * total / total
}

/*the function below will put the score into a class of grade*/
function whichgrade (score) {
    if (score >= 0 && score <= 49){
        grade= "F"
    }
    if (score >= 50 && score < 59){
        grade= "E"
    }
    if (score >= 60 && score <69){
        grade= "D"
    }
    if (score >= 70 && score <79){
        grade= "C"
    }
    if (score >= 80 && score <89){
        grade= "B"
    }
    else (score >= 90 && score <= 100){
        grade= "A"
    }

    return grade
}

console.log("You got an " + (whichgrade(90)) + " (" + (perc(90, 100)+ "%)!"))