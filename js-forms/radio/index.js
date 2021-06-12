const displayResult = (isCorrect) => {
    const resultElement = document.getElementById('result-target');

    if (isCorrect) {
        resultElement.innerText = "YOU'RE HIRED!"
    }
    else {
        resultElement.innerText = "FAILED"
    }
}

const finalButton = document.getElementById('final-button');

const correctAnswer = 'red'

finalButton.addEventListener('click', (event) => {
    const radioButtons = document.querySelectorAll('.radio-button');

    let i = 0;

    let checkedRadio = null;
    while(i < radioButtons.length) {
        const currentRadio = radioButtons[i];

        if (currentRadio.checked) {
            checkedRadio = currentRadio.value
        }
        i++;
    }

    console.log(radioButtons)
    displayResult(checkedRadio === correctAnswer)
})


