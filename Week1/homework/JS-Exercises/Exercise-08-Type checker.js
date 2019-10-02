const firstItem = "First String";

const secondItem = "Second String";

const thirdItem = {
        name : "First Object",
        number : 1,
                };
                
const fourthItem = {
        name : "Second Object",
        number : 2,
                 };

if (typeof firstItem === typeof secondItem) {

        console.log("firstItem and secondItem are same type.");

}

else {
        
        console.log("firstItem and secondItem are not the same.");

}

if (typeof firstItem === typeof thirdItem) {

        console.log("firstItem and thirdItem are same type.");

}

else {
        
        console.log("firstItem and thirdItem are not the same.");

}

if (typeof firstItem  === typeof fourthItem) {
        
        console.log("firstItem and fourthItem are same type.");
        
}

else {
        
        console.log("firstItem and fourthItem are not the same.");

}

if (typeof secondItem  === typeofthirdItem) {

        console.log("secondItem and thirdItem are same type.");

}

else {
        
        console.log("secondItem and thirdItem are not the same.");

}

if (typeof secondItem === typeof fourthItem) {
        
        console.log("secondItem and fourthItem are same type.");
        
}

else {
        
        console.log("secondItem and fourthItem are not the same.");

}

if (typeof thirdItem  === typeof fourthItem) {
        
        console.log("thirdItem and fourthItem are same type.");
        
}

else{
        
        console.log("thirdItem and fourthItem are not the same.");

}

if (typeof thirdItem.name === typeof fourthItem.name) {
        
        console.log("name of thirdItem and name of fourthItem are same type.");
        
}

else {
        
        console.log("name of thirdItem and name of fourthItem are not the same.");

}

if (typeof thirdItem.number  === typeof fourthItem.number) {

        console.log("number of thirdItem and number of fourthItem are same type.");
        
}

else {
        
        console.log("number of thirdItem and number of fourthItem are not the same.");

}


console.log("The type of firstItem is " + typeof(firstItem) + ".");

console.log("The type of thirdItem is " + typeof(thirdItem) + ".");