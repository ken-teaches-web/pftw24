// learning about functions
// what is a function?
// function sayHelloPerson(name) {
//     alert("howdy " + name);
// }
// how do you use it?
// sayHelloPerson("Sam");
// sayHelloPerson("Alice");
// step("chocolate", "eat");
// function calculator(number1, number2) {
//     let modifiedNumber1 = number1;
//     let modifiedNumber2 = number2;
//     if(typeof number1 === "string") {
//         modifiedNumber1 = Number(number1)
//     }
//     if(typeof number2 === "string") {
//         modifiedNumber2 = Number(number2)
//     }
//     console.log(modifiedNumber1 + modifiedNumber2);
// }
// calculator(17, "36");
// calculator(33, 77);
// returning
// function calculatorV2(n1, n2, operation){
//     if(operation === "add") {
//         return n1 + n2;
//     }
//     if(operation === "subtract") {
//         return n1 - n2;
//     }
// }
// const whatISTheFunction = calculatorV2(10, 7, "subtract");
// const anotherFunctionReturn = calculatorV2(10, 7, "add");
// console.log("another fn", anotherFunctionReturn)
// console.log("this is the variable what is the function", whatISTheFunction)
// if(whatISTheFunction) {
//     console.log("truthy")
// } else {
//     console.log("falsy")
// }

// function step(ingredient, action) {
//     // what ever code makes sense
//     console.log("I'm going to " + action + " the " + ingredient);
// }
// console.log(step("bread", "get from the cupboard"));
// console.log(step("peanut butter", "get from the cupboard"));
// console.log(step("jelly", "get from the fridge"));
// console.log(step("peanut butter", "spread"));
// how do you make it useful?
// two ways to create functions
// anonymous functions
// "fat arrow" functions
// const myOtherFunction = (ingredient) => {
//     console.log("I have the " + ingredient);
// }
// myOtherFunction("peanut butter")


// looping
// what do we get out of looping
// what data types are iterable
// for loop
// looping with arrays
// let myArray = ["snoopy", "clifford", "tintin", "odie"]
// for(let loopVariable = 0; loopVariable < myArray.length; loopVariable++) {
//    console.log("I really like " + myArray[loopVariable])
// }
// console.log(myArray)
// while loop -- dangerous b/c it can go forever
// let myNumber = 0;
// while(myNumber < 20) {
//     console.log("I'm waving hello", myNumber);
//     myNumber++;
// }
// for in
// const myObject = {
//     color: "red",
//     style: "flashy",
//     name: "something"
// };
// // for(let objectKey in myObject) {
// //     console.log(`${objectKey}: ${myObject[objectKey]}`);
// // }
// const keys = Object.keys(myObject);
// console.log(keys)
// for(let i = 0; i < keys.length; i++) {
//     const currentKey = keys[i];
//     console.log(`${currentKey}: ${myObject[currentKey]}`);
// }
// looping demo in p5js
// const rectCoordinates = [
//     {x: 0, y: 15},
//     {x: 15, y:100},
//     {x: 300, y: 250},
//     {x: 450, y: 0},
    
// ]
// function setup() {
//     createCanvas(600, 600);
//     background(100);
// }

// function draw() {
//     noLoop();
//     for(let loopVar = 0; loopVar < rectCoordinates.length; loopVar++) {
//         rect(rectCoordinates[loopVar].x, rectCoordinates[loopVar].y, 30, 30);
//     }
// }
// looping demo with a function

// p5 fun
// push and pop
// rotate angleMode(DEGREES)
// translate

const myQuiz = [
    {question: "What color is red", answer: "red"},
    {question: "What color is pink", answer: "light red"},
    {question: "What is blue", answer: "a color"}
];
const randomIndex = Math.floor(Math.random() * myQuiz.length);
console.log("random index", randomIndex);
const selectedQuestion = myQuiz[randomIndex];
const response = window.prompt(selectedQuestion.question);
alert("The correct answer was " + selectedQuestion.answer)
