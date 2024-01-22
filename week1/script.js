// // what is a variable?

// const myVariable = "yoshi";
// let myNumber = 10;
// console.log("my variable is " + myVariable); // plus sign (concatenation operator)
// console.log("my number ", myNumber);
// // how do I "see" it? - console.log

// // are there many types of variables?
// // string -- characters inside of quotes
// // number -- 10
// // boolean -- true | false
// const amIRunningLate = true;
// console.log("late", amIRunningLate);

// if(myVariable === "bob") { // runs if condtion is true
//     let myOtherNumber = 15;
//     console.log("my block number", myOtherNumber);
//     console.log("you are super late");
// } else if (myVariable === "ken") {
//     console.log("you have got so much time")
// } else {
//     console.log("it wasn't any of the above")
// }
// // var, let, and const
// // if variable will change, use "let"
// // if variable will not change, use "const"
// // only var intentionally -- don't really use this; let and const are better

// p5 stuff
let x = 0;
function setup() {
    createCanvas(400, 400);
    
}

function draw() {
    background(100);
    fill("#ff0000")
    rect(x, 20, 55, 55);
    x = x + 1;

}