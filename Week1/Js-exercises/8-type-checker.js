
"use strict";
const var1 = "customers";
const var2 = "suppliers";
const var3 = {storeName:"mainStore",storeId:001};
const var4 = {itemName:"laptop",itemId:0200};


console.log(typeof var1);
console.log(typeof var3);

if (typeof var1 === typeof var2){
    console.log("These two variables have the same type");

}else {
    console.log("They are not the same type");
};

if (typeof var1 === typeof var3){
    console.log("These two variables have the same type");

}else {
    console.log("They are not the same type");
};

if (typeof var1 === typeof var4){
    console.log("These two variables have the same type");

}else {
    console.log("They are not the same type");
};

if (typeof var2 === typeof var3){
    console.log("These two variables have the same type");

}else {
    console.log("They are not the same type");
};

if (typeof var2 === typeof var4){
    console.log("These two variables have the same type");

}else {
    console.log("They are not the same type");
};

if (typeof var3 === typeof var4){
    console.log("These two variables have the same type");
 
}else {
    console.log("They are not the same type");
};

if (typeof var1 !== typeof var3){
    console.log("They are not the same type");
};

if (typeof var1 !== typeof var2){
    console.log("They are not the same type");
}else {
    console.log("These two variables have the same type")
};
