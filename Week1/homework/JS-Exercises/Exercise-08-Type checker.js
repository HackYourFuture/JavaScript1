let firstItem = "First String"; secondItem = "Second String";
let thirdItem = {
        name : "First Object",
        number : 1,
                };
    fourthItem = {
        name : "Second Object",
        number : 2,
                 };

typeof(firstItem) == typeof(secondItem) ? console.log("firstItem and secondItem are same type.") : console.log("firstItem and secondItem are not the same.");

typeof(firstItem) == typeof(thirdItem) ? console.log("firstItem and thirdItem are same type.") : console.log("firstItem and thirdItem are not the same.");

typeof(firstItem) == typeof(fourthItem) ? console.log("firstItem and fourthItem are same type.") : console.log("firstItem and fourthItem are not the same.");

typeof(secondItem) == typeof(thirdItem) ? console.log("secondItem and thirdItem are same type.") : console.log("secondItem and thirdItem are not the same.");

typeof(secondItem) == typeof(fourthItem) ? console.log("secondItem and fourthItem are same type.") : console.log("secondItem and fourthItem are not the same.");

typeof(thirdItem) == typeof(fourthItem) ? console.log("thirdItem and fourthItem are same type.") : console.log("thirdItem and fourthItem are not the same.");

typeof(thirdItem.name) == typeof(fourthItem.name) ? console.log("name of thirdItem and name of fourthItem are same type.") : console.log("name of thirdItem and name of fourthItem are not the same.");

typeof(thirdItem.number) == typeof(fourthItem.number) ? console.log("number of thirdItem and number of fourthItem are same type.") : console.log("number of thirdItem and number of fourthItem are not the same.");


console.log("The type of firstItem is " + typeof(firstItem) + ".");

console.log("The type of thirdItem is " + typeof(thirdItem) + ".");