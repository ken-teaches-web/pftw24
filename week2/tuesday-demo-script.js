// Jan 23

// function and method teaser (what do the parentheses mean?)

console.log("Hi");
// New Data type: Arrays!
    // store numerially indexed data
    // creation
   
    // let myArray = ["john", "jingleheimer", "jacob",  "schmitt"];
    // const jingleheimerIndex = myArray.indexOf("jingleheimer");
    // myArray.splice(jingleheimerIndex, 1, "jane")


    // console.log(myArray[1]);
    // myArray.push("phil");
    // myArray[1] = "bob"
    // const myOtherArray = new Array();
    // const yetAnotherArray = [];
    // formatting
    // rules (when to use string, when to not)
    // determing the number of items in an array
    // console.log("my array is this long", myArray.length);
    // figuring out which item is the index you want
    // const philIndex = myArray.indexOf("phil");
    // console.log("you can find phil at index", philIndex)
    // if(philIndex >= 0) {
    //     console.log("found phil")
    // } else {
    //     console.log("there is no phil")
    // }
    
    // methods for manipulation (mutation)
        // push, pop,  splice, shift, unshift
    // myArray.push("alice") // added an item to the end
    // console.log(myArray);
    // const whatWasPopped = myArray.pop();
    // console.log("array after pop", myArray);
    // console.log("this was popped", whatWasPopped);
    // myArray.splice(3, 0, "gary", "kevin"); // index to start, how many to remove, 3+ items to add
    // console.log("spliced array", myArray);
    // myArray.unshift("charlotte")
    // console.log("unshifted array", myArray)
    // making arrays from a string with split()
    // const myEmails = "ken@kenkorth.com kkorth@mcad.edu kkorth@spscommerce.com";
    // const myEmailArray = myEmails.split();
    // console.log("email array", myEmailArray);
    // joining arrays to form a string with join()
    // const myCarArray = ["chevy", "subaru", "ford", "hyundai", "tesla"];
    // console.log(myCarArray.join(", "));
    // checking if a variable is an array

// New Data type: Objects!
    // store data using a key-value pair as object properties
    // describe a car
    const myObject = {color: "red"};
    // using square brackets with the key in quotes is array notation
    // using a dot with no quotes is dot notation
    console.log("What is the object color", myObject.color);
    // creation
    // const myCar = {
    //     color: "red",
    //     make: "honda",
    //     wheels: 4,
    //     model: "accord"
    // };
    // const yourCar = {
    //     color: "black",
    //     make: "tesla",
    //     wheels: 4,
    //     model: "who knows"
    // };
    // console.log("my car", myCar)
    let shipToAddress =  {
        addressTypeCode: "ST",
        address1: "123 Right Here Blvd",
        city: "Hershey",
        state: "PA",
        id: "zsdfl23451a"
    };
    // formatting
    // const doesn't prevent object properties from changing
    // deleting a property
    delete shipToAddress.id;
    console.log("shipto address after id delete", shipToAddress)
    // mutationally adding/changing with key
    shipToAddress.addressTypeCode = "SF";
    console.log("updated ship to", shipToAddress)
    // objects ((and arrays) are stored as reference through assignment
    // const myStringA = "a";
    // const myStringB = myStringA;
    // const shipFrom = shipToAddress;
    // shipToAddress.address1 = "Anywhere but here";
    // console.log("ship from address", shipFrom);
    // non-mutationally making new objects from old objects

// Combining objects and array -- quiz
// key thoughts -- all the objects should have the same properties (sometimes referred to as a shape) to make them predictable
const myCollectionOfCommanderDecks = [
    {
        commander: "Breya",
        colors: ["white", "black", "red", "blue"],
        winCon: "make lots of tokens and kill your opponents"
    },
    {
        commander: "Braids",
        colors: ["black"],
        winCon: "make everyone sacrafice their creatures and take life damage"
    },
    {
        commander: "Essix",
        colors: ["green", "blue"],
        winCon: "copy everyones good creates and beat them with the copies"
    },
    {
        commander: "Frealise",
        colors: ["green"],
        winCon: "I don't actually win with this deck :-("
    }
];
//console.log(myCollectionOfCommanderDecks[2].winCon);
// use Math.random
const randomDeckIndex = Math.floor(Math.random() * myCollectionOfCommanderDecks.length);
console.log(myCollectionOfCommanderDecks[randomDeckIndex].commander)
const response = window.prompt("who is the commander for this win con " + myCollectionOfCommanderDecks[randomDeckIndex].winCon);
if(response === myCollectionOfCommanderDecks[randomDeckIndex].commander) {
    console.log("YOU WIN")
} else {
    console.log("YOU SO DIDN'T win");
}
// Math floor
// console.log(Math.floor(3.99999999999))



