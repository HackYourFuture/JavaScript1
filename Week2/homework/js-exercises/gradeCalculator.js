function grade(score,total) {
    score=score/total*100
 
     if (score > 90) {
         return 'A';
     } else if (score<90 && score>=80) {
         return `B s`;
     } else if (score<80 && score>=70) {
         return 'C';
     } else if (score<70 && score>=60) {
         return 'D';
     } else {
         return 'F';
     }
 }
 
 console.log(`You got a  ${grade(75,100)} `);
 
