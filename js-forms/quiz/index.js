
const checkIfStepHasCorrectAnswer = (radioButtons, stepCorrectValue) => {

    let i = 0;

    while (i < radioButtons.length) {
        if (radioButtons[i].checked && radioButtons[i].value === stepCorrectValue) {
            return true;
        }
        i++;
    }

    return false;
}

const steps = [
    {
        name: 'step-one',
        correct: 'triceratops'
    },
    {
        name: 'step-two',
        correct: 'erectus'
    },
]

const finalButton = document.getElementById('final-button');

finalButton.addEventListener('click', () => {
    let finalPoints = 0;

    let i = 0;
    while (i < steps.length) {
        const currentStep = steps[i];
        const radioButtons = document.querySelectorAll('.' + currentStep.name);

        const stepHasCorrectAnswer = checkIfStepHasCorrectAnswer(radioButtons, currentStep.correct);

        if (stepHasCorrectAnswer) {
            finalPoints++;
        }
        i++;
    }

    alert(finalPoints)
    
})