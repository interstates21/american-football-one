// The whole code of our app
const someGlobalVariable = "Global Hello";

// Function declarations

// Visible for both functions
const globalTargetElementVar = document.getElementById('target-for-hi');

const displayHiOnThePage = () => {
    globalTargetElementVar.innerHTML = "Hi"
}

const displayCatOnThePage = () => {
    globalTargetElementVar.innerHTML = "Cat"
}


const myAge = 15;
if (myAge < 20) {
    const title = 'Kid';
}

// console(title); Error: title is not defined

// Run those functions
// displayHiOnThePage()
displayCatOnThePage();