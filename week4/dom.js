// what is the DOM?
// window is Everything
// console.log("window", window);
// console.log("body", document.body.children[1])
// console.log("all divs", document.getElementsByTagName("div"))
const targetDiv = document.getElementById("targetDiv");
// targetDiv.classList.add("red");
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// console.log("array of div", document.getElementsByClassName("repeatedClass"));
// const repeatedClassDivs = document.getElementsByClassName("repeatedClass");
const myColors = ["red", "blue", "green", "teal", "cyan", "yellow"]
// for(let i = 0; i < repeatedClassDivs.length; i++) {
//     repeatedClassDivs[i].style.background = myColors[i];
// } 
// let heading = document.createElement("h2");
// heading.innerHTML = "this is the heading";
// targetDiv.prepend(heading);
let colorIndex = 0;
targetDiv.addEventListener("click", function (event) {
    console.log("you clicked on target div", event);

});
setTimeout(() => {
    // why didn't this work the way I thouight it would?
    targetDiv.removeEventListener("click", function (event) {
        console.log("you clicked on target div", event);
    });
    console.log("listener removed");
}, 5000);
