const button1 = document.getElementById("button-9")
const button2 = document.getElementById("button-10")
const button3 = document.getElementById("button-11")
const button4 = document.getElementById("button-5")
const button5 = document.getElementById("button-6")
const button6 = document.getElementById("button-7")
const button7 = document.getElementById("button-1")
const button8 = document.getElementById("button-2")
const button9 = document.getElementById("button-3")
const button0 = document.getElementById("button-13")
const buttonPlus = document.getElementById("button-15")
const buttonMinus = document.getElementById("button-12")
const button1Multiply = document.getElementById("button-8")
const buttonDivide = document.getElementById("button-4")
const buttonEqually = document.getElementById("button-16")
const buttonPoint = document.getElementById("button-14")

let buttonsWithNumber = document.getElementsByClassName("number")

const display = document.getElementById("display")
let displayValue = display.textContent


let i = 0


while (i < buttonsWithNumber.length) {
    let CurrentButton = buttonsWithNumber[i]
buttonsWithNumber[i].addEventListener('click', (event) => { 
    if (displayValue === "0"){       
        displayValue = CurrentButton.textContent
        display.innerHTML=displayValue
}
    else if (displayValue.length < 9) { 
       
        displayValue = display.textContent + CurrentButton.textContent
        display.innerHTML=displayValue}   
})
i++
}
buttonPlus.addEventListener('click', (event) => { 
    let rememberedNumber = displayValue

    
    

})


let value1 = ''
let value2 = ''

window.addEventListener("click", (e) => {
if (e.target.classList.contains('number')) {
// collect first or second value
}
else if (e.target.classList.contains('operation')) {
// switch to collecting second value
}
else if (e.target.id === 'equals') {
// calculate and display
}
})
