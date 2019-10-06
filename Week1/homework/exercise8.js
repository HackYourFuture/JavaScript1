"use strict"

const item1 = ("On wednesday we wear pink.");
const item2 = ("Except I am wearing red...");
const item3 = {HeyHo};
const item4 = {LetsGo};

if (typeof item1 === typeof item2)
{
    console.log("Same type")
}   else {
    console.log("Not the same...")
}

if (typeof item1 === typeof item3)
{
    console.log("Same type")
}   else {
    console.log("Not the same...")
}

if (typeof item1 === typeof item4)
{
    console.log("Same type")
}   else {
    console.log("Not the same...")
}

if (typeof item2 == typeof item1)
{
    console.log("Same type")
}   else {
    console.log("Not the same...")
}

if (typeof item2 === typeof item3)
{
    console.log("Same type")
}   else {
    console.log("Not the same...")
}

if (typeof item2 === typeof item4)
{
    console.log("Same type")
}   else {
    console.log("Not the same...")
}

if (typeof item3 === typeof item1)
{
    console.log("Same type")
}   else {
    console.log("Not the same...")
}

if (typeof item3 === typeof item4)
{
    console.log("Same type")
}   else {
    console.log("Not the same...")
}