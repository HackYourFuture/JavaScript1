const itens1 = ["Menu", 123, {feeling: "hungry"}, "Let's eat something!"];
const itens2 = [45, 78, true, false, {food: "bring me food"}, 65, true];
console.log ('The first array has the lenght of' + itens1.length);
console.log ('The second array has the lenght of' + itens2.length);

if (itens1.length == itens2.length)
{
    console.log("The arrays have the same length!")
}   else {
    console.log("The arrays don't have the same length!")
}