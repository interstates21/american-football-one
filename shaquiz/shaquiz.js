
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
        correct: 'twentyfourhours'
    },
    {
        name: 'step-two',
        correct: 'lion'
    },
    {
        name:'step-three',
        correct:'jupiter'
    },
    {
        name:'step-four',
        correct:'february'
    },
    {
        name:'step-five',
        correct:'white'
    }
]

const finalButton = document.getElementById('btn');

function quiz() {
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
    console.log(finalPoints);
    document.getElementById('result').innerHTML="Result"+":"+finalPoints;

 
    
}