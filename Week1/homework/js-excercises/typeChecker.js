'use strict'
const firstVar = "My name is Slim Shady";
const secondVar = "What does the fox say";
const catalog = {artist: "Emancipator", song: "Black Lake", year: 2010};
const albums = ["Safe in the steep Cliffs", "Soon It Will Be Cold Enough", "Dusk to Dawn"];
 
console.log(`The data type of firstvar is ${typeof firstVar}`);
typeof firstVar === typeof secondVar ? console.log("SecondVar is the same type"): console.log('Not the same type');
typeof firstVar === typeof catalog ? console.log("Catalog is the same type"): console.log('Catalog is Not the same type');
typeof firstVar === typeof albums ? console.log("Albums is the same type"): console.log('Albums is Not the same type');
console.log(`The data type of catalog is ${typeof catalog}`);
typeof catalog ===typeof albums ? console.log("Albums is the same type"): console.log("Albums is Not the same type");
typeof catalog ===typeof firstVar ? console.log("FirstVar is the same type"): console.log("FirstVar is Not the same type");
typeof catalog ===typeof secondVar ? console.log("SecondVar is the same type"): console.log("SecondVar is Not the same type");