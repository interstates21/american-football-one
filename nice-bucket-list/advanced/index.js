// Aim:
// Create a list of your dreams

// Steps:
// Create a text input in html
// Create a submit button in html
// Create a container for dreams

// Create a list of dreams array
// Prefill your dreams array (suppose you havew a couple already)

// Display(render) the initial dreams list
// -- Select the html container
// -- For each dream - append a new ListItem div to the container

// Listen clicks on the sumbit button
// Inside of click function - get the value of text input
// Add a new value (dream) to the array
// Update the displayed list (rerender)


const DREAMS = [
        'Climb a 40m Pine tree', 
        'Jump from the highest tower in a swimming pool', 
]
const container = document.getElementById('dreams-list');

const createDreamItem = (dreamText) => {
    // We want to create this for each dream <li class="list-group-item">An item</li>
    const newListItem = document.createElement('li');
    newListItem.className = 'list-group-item';

    newListItem.innerText = dreamText;
    container.appendChild(newListItem);  
    
    // Define a behaviour on click for this item
    newListItem.addEventListener('click', () => {
        const isActive = newListItem.classList.contains('list-item-active');
        if (!isActive) {
            newListItem.classList.add('list-item-active')
        } else {
            newListItem.classList.remove('list-item-active')
        }
    })
}

const renderList = () => {
    let i = 0;
    while (i < DREAMS.length) {
        createDreamItem(DREAMS[i]);
        i++;
    }
} 


// Execution

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {

    const inputElement = document.getElementById('dream-input');

    createDreamItem(inputElement.value);
    DREAMS.push(inputElement.value);

    inputElement.value = '' // Clear the input text after sumbitting
})

renderList();
