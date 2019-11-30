'use strict';
let firstData = "Messi";
let secondData = "Ronaldo";
let thirdData = [];
let fourthData ={};
console.log(typeof firstData === typeof secondData);
console.log(typeof firstData === typeof thirdData);
console.log(typeof firstData === typeof fourthData);
console.log(typeof secondData === typeof thirdData);
console.log(typeof secondData === typeof fourthData);
console.log(typeof thirdData === typeof fourthData);

if (typeof firstData === typeof secondData){
    console.log("firstData and secondData are SAME TYPE");
} else{
    console.log("firstData and secondData are DIFFERENT TYPE")
};

if (typeof firstData === typeof thirdData){
    console.log("SAME TYPE");
} else{
    console.log("firstData and thirdData are DIFFERENT TYPE")
};

if (typeof firstData === typeof fourthData){
    console.log("SAME TYPE");
} else{
    console.log("firstData and fourthData are DIFFERENT TYPE")
};

if (typeof secondData === typeof thirdData){
    console.log("SAME TYPE");
} else{
    console.log("secondData and thirdData are DIFFERENT TYPE")
};

if (typeof secondData === typeof fourthData){
    console.log("SAME TYPE");
} else{
    console.log("secondData and thirdData are DIFFERENT TYPE")
};

if (typeof thirdData === typeof fourthData){
    console.log("thirdData and fourthData are SAME TYPE");
} else{
    console.log("thirdData and fourthData are DIFFERENT TYPE")
};