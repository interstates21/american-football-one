const finalButton = document.getElementById('final-button');


const correctAnswer = {
    red: false,
    blue: true,
    yellow: true,
}

finalButton.addEventListener('click', (event) => {
    const redhasChecked = document.getElementById('red').checked;
    const blueHasChecked = document.getElementById('blue').checked;
    const yellowHasChecked = document.getElementById('yellow').checked;

    const resultElement = document.getElementById('result-target');
    if (correctAnswer.red === redhasChecked && correctAnswer.blue === blueHasChecked && correctAnswer.yellow === yellowHasChecked) {
        resultElement.innerText = "YOU'RE HIRED!"
    }
    else {
        resultElement.innerText = ""
    }

})