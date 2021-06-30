

const myButton = document.getElementById('my-button');

const renderValueToPage = (value) => {
    const valueMessageElement = document.getElementById('value-message');
    valueMessageElement.innerText = value
}


const storedValue = window.localStorage.getItem('DINOSAUR_VALUE')
renderValueToPage(storedValue || 'No Dinosaur Yet :(');

myButton.addEventListener('click', (event) => {
    event.preventDefault();

    const inputValue = document.getElementById('my-input').value;


    // Store the value to localStorage
    window.localStorage.setItem('DINOSAUR_VALUE', inputValue)

    // Render the message with the value
    renderValueToPage(inputValue)
})