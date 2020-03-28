"use strict";

//this function converts scores to grades

function scoreConverter(score) {
  score = score / 100;

  if (score >= 0 && score <= 0.49) {
    console.log("You got a F (%s%)!", score * 100);
  } else if (score >= 0.5 && score <= 0.59) {
    console.log("You got a E (%s%)!", score * 100);
  } else if (score >= 0.6 && score <= 0.69) {
    console.log("You got a D (%s%)!", score * 100);
  } else if (score >= 0.7 && score <= 0.79) {
    console.log("You got a C (%s%)!", score * 100);
  } else if (score >= 0.8 && score <= 0.89) {
    console.log("You got a B (%s%)!", score * 100);
  } else if (score >= 0.9 && score <= 1) {
    console.log("You got a A (%s%)!", score * 100);
  }
}
// Let us test it if it works
scoreConverter(60);
