//convert the score into a percentage

function convertGrade(score) {
    //calculate what grade corresponds with that percentage
    if (score < 0.9 || score > 100) {
      return `${score} is not a score`;
    } else if (score >= 90) {
      return `You got a A ${score}%`;
    } else if (score >= 80) {
      return `You got a B ${score}%`;
    } else if (score >= 70) {
      return `You got a C ${score}%`;
    } else if (score >= 60) {
      return `You got a D ${score}%`;
    } else if (score >= 50) {
      return `You got a E ${score}%`;
    } else if (score >= 0) {
      return `You got a F ${score}%`;
    }
  }
  //shows in the command line the result: the grade and the percentage
  let result = convertGrade(60);
  console.log(result);
  
  //second way with switch
  /*same with switch , every case with number and if the number not 
  the same of cases it give the default*/
  let theScore = 60;
  switch (theScore) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
      grade = 'you got a F';
      break;
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
      grade = 'you got a E';
      break;
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
      grade = 'you got a D';
      break;
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
      grade = 'you got a C';
      break;
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
      grade = 'you got a B';
      break;
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
    case 100:
      grade = 'you got a A';
      break;
    default:
      grade = 'it not score';
      break;
  }
  //shows in the command line the result: the grade and the percentage
  const resultSwit = `${grade} ${theScore}% `;
  console.log(resultSwit);
  