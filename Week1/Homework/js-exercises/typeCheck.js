"use strict";

var favoriteFruit = "Apple";
var favoriteCity = "Amsterdam";

var mac = {
  brand: "Mac Book Pro",
  model: 2013
};

var myDaughter = {
  name: "Asude",
  birtheYear: "2019"
};

if (favoriteFruit === favoriteCity) {
  console.log("SAME TYPE");
} else {
  console.log("Not the same...");
}

if (favoriteFruit === mac) {
  console.log("SAME TYPE");
} else {
  console.log("Not the same...");
}

if (favoriteFruit === myDaughter) {
  console.log("SAME TYPE");
} else {
  console.log("Not the same...");
}

if (favoriteCity === mac) {
  console.log("SAME TYPE");
} else {
  console.log("Not the same...");
}

if (favoriteCity === myDaughter) {
  console.log("SAME TYPE");
} else {
  console.log("Not the same...");
}

if (mac === myDaughter) {
  console.log("SAME TYPE");
} else {
  console.log("Not the same...");
}
