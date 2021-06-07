
const guessForm = document.getElementById('guess-form');


const correctGuess = 'eleven';

guessForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('event = ', event)
    const textValue = event.target[0].value;

    if (textValue === correctGuess) {
        const successElement = document.createElement('div');
        successElement.className = 'success';

        successElement.innerText = 'SUCCESS';


        document.getElementById('main-container').appendChild(successElement);
    }
})