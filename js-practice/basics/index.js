const helloMessage = "Hello World!";

console.log("Hello World!");
console.log(helloMessage);

const someString = "Hello"; // String
const someNumber = 50; // Number
const someAddedNumber = 50 + 10; // Number
const someNull = null; // Nothing
const someUndefined = undefined; // Similar to null
const someBoolean = true; // or false


// Arrays
const someArrayVariable = ['Hello',  'Hi', "Good Morning!"]; // Array === Collection of different variables
const someArrayVariableWithIndexesExplained = ['Hello --- index 0',  'Hi --- index 1', "Good Morning! --- index 2"]; 

console.log("Print the whole array to the console", someArrayVariable);
console.log("Print the first element of the array", someArrayVariable[0]);
console.log("Print the second element of the array", someArrayVariable[1]);


// Objects
const someObject = {
    helloMessage: 'Hello World!',
    hiMessage: 'Hi!'
}


// Access an object element with dot
const someVariable1 = someObject.helloMessage;
console.log("Print the first (helloMessage) value of an object", someVariable1);

// Access an object element with []
const someVariable2 = someObject["hiMessage"];
console.log("Print hiMessage of an object", someVariable2)

// Add a new key to the object
someObject.goodMorningMessage = "Good Morning!";

console.log("Displays the whole object", someObject);


// Different kinds of variables

var k = "Deprecated way of declare variable";

let l = "Some variable which you could change (reassign)";
const r = "Some constant variable";

let myAge = 10;
// let myAge = 10; Error: Cannot recreate a variable with the same
myAge = 11; // Reasign a value of myAge variable

const myName = "Alex";
// myName = "Jon" --> Error: Cannot reasign a constant variable


// Dom manipulation

window.addEventListener("load", () => {
    // window.addEventListener("load", () => {}) ---> Waits untill a browser has been fully loaded

    const changeColorButtonReference = document.getElementById("change-color-button");
    console.log("Print color button reference = ", changeColorButtonReference);
    // changeColorButtonReference.style.backgroundColor = "red"; --> Change the backgroung color of our button


    changeColorButtonReference.addEventListener('click', () => {
        // The code inside of this block will be exacuted when the button is clicked
        const colorfulBoxReference = document.getElementById('colorful-box');
        
        // Switch between blue and plum background color in colorful box
        // ! not operator
        // === check if equal then return true


        // if (colorfulBoxReference.style.backgroundColor === 'blue') {
        //     colorfulBoxReference.style.backgroundColor = "plum"
        // }
        // else {
        //     colorfulBoxReference.style.backgroundColor = "blue"
        // }


        // Check if the box is not plum -> then make it plum, otherwise make it red
        if (colorfulBoxReference.style.backgroundColor !== 'plum') {
            colorfulBoxReference.style.backgroundColor = 'plum'
        }
        else {
            colorfulBoxReference.style.backgroundColor = 'red'
        }
    })



    const changeSizeButtonRef = document.getElementById("change-size-button");

    changeSizeButtonRef.addEventListener('click', () => {

        const smallBoxRef = document.getElementById('small-box');

        // The width format it string "50px", in order to do a Math
        // operation we need to convert it into a number
        if (parseInt(smallBoxRef.style.width) < 100) {
            smallBoxRef.style.width = '100px';
            smallBoxRef.style.height = '100px';
        }
        else if (parseInt(smallBoxRef.style.width) < 150) {
            smallBoxRef.style.width = '150px';
            smallBoxRef.style.height = '150px';
        }
        else if (parseInt(smallBoxRef.style.width) < 200) {
            smallBoxRef.style.width = '200px';
            smallBoxRef.style.height = '200px';
        }
        else {
            smallBoxRef.style.width = '50px';
            smallBoxRef.style.height = '50px';
        } 
    })
})

