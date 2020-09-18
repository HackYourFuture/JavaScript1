
 let val;
function grade(val){
    if((val>=0)&&(val <= 49)){
        console.log(`You got F (${val}%)!`);
    }
    else if ((val >= 50) && (val <= 59)){
        console.log(`You got E (${val}%)!`);
    }
    else if ((val >= 60) && (val <= 69)){
        console.log(`You got a D (${val}%)!`);
    }
    else if ((val >= 70) && (val <= 79)){
        console.log(`You got a C (${val}%)!`);
    }
    else if ((val >= 80) && (val <= 89)){
        console.log(`You got a B ({val}%)!`);
    }
    else if ((val >= 90) && (val <= 100)){
        console.log(`You got A (${val}%)!`);
    }
    else{
        console.log("input is not valid");
    }
}
grade(98);
grade(42);
grade(62);
grade(72);