// timers
// timeout - one time timer
function alertUser(name) {
    window.alert("surprise " + name + " the timer is up");
}
// window.setTimeout(function () {
//     console.log("this was called in the timeout")
// }, 1000);
// interval
// const myInterval = window.setInterval(function () {
//     console.log(new Date())
// }, 2000)

// clearInterval
// const myButton = document.getElementById("cancelInterval");
// myButton.addEventListener("click", () => {
//     console.log("clearning interval");
//     window.clearInterval(myInterval);
// })


// OOP - Object Oriented Programming
// classes are capitolized
// class Car {
//     // constructor is a initalizing function
//     constructor(color, tires) {
//         console.log("I've been constructed");
//         this.color = color;
//         this.tires = tires;
//     }
// }
// const myCar = new Car("red", "3");
// const myOtherCar = new Car("blue", "6");
// console.log(myCar, myOtherCar)

class RexRectangle {
    constructor(x, y, color, flipColor) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.flipColor = flipColor;
        this.width = 50;
        this.height = 100;
        this.hit = false; // state of rectangle
    }
    show () {
        if(this.hit) { // check state
            fill(this.flipColor);
            rect(this.x, this.y, this.width, this.height);
        } else {
            fill(this.color);
            rect(this.x, this.y, this.width, this.height);
        }    
    }
    clicked () {
        this.hit = !this.hit;
        this.show();
    }

}
let startX = 150;
let startY = 150;
let rectArr = [];
for(let i = 0; i < 2; i++) {
    for(let j = 0; j< 4; j++){
        rectArr.push(new RexRectangle(startX, startY, "blue", "green"));
        startX += 150;
    }
    startX = 150;
    startY += 150
}
console.log(rectArr)

function setup() {
    createCanvas(800, 600);
    background("#999999");
}
function draw() {
    // use circle class
    for(let k = 0; k < rectArr.length; k++) {
        rectArr[k].show();
    }


}

function mousePressed() {
    for(let l = 0; l < rectArr.length; l++){
        if(
            mouseX > rectArr[l].x &&
            mouseX < rectArr[l].x + rectArr[l].width &&
            mouseY > rectArr[l].y && 
            mouseY < rectArr[l].y + rectArr[l].height
            ) {
                console.log("you hit", rectArr[l]);
                rectArr[l].clicked();
                window.setTimeout(() => {
                    rectArr[l].clicked();
                }, 2000)
            }
    }
}

// this

// classes, instances, and constructors (oh my!)

// the quiz
// use an array
// create, add, remove splice()
// objects
// create, add properties, delete properties
// difference between = and ===
// how conditions work
// what a function, how to create
// open note
// due sunday night