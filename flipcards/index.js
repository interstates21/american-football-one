

const card = document.getElementById('card-1');

// const arrayOfCards = document.querySelectorAll('.card');



// let i = 0; Create a dynamic index of an array
// while (condition) {
//     Code that runs for a single element
//     i = i + 1 increment the index by one on each step
// }

// let iterator = 0;
// while (iterator < arrayOfCards.length) {
//     const currentCard = arrayOfCards[iterator];
//     currentCard.innerHTML = `
//         <img src='./pics/${String(iterator + 1)}.png' class="card-image"/>
//     `
//     iterator++;
// }



const DATA = [
    {
        url: '1.png',
        isVisible: false
    },
    {
        url: '2.png',
        isVisible: false
    },
    {
        url: '3.png',
        isVisible: false
    },
    {
        url: '4.png',
        isVisible: false
    },
    {
        url: '5.png',
        isVisible: false
    },
]

let i = 0;

const container = document.getElementById('card-container');

while (i < DATA.length) {
    const currentCardObject = DATA[i];

    const createdElement = document.createElement('div');
    createdElement.className = 'card';
    
    let realCurrentIndex = i;
    createdElement.addEventListener('click', () => {
        // Code that runs when you click this card
        // Change the state of card
        if (currentCardObject.isVisible === true) {
            currentCardObject.isVisible = false;
            createdElement.innerHTML =  `<img src='./pics/${DATA[realCurrentIndex].url}' class="card-image"/>`
        }
        else {
            currentCardObject.isVisible = true;
            createdElement.innerHTML = ''
        }
    })


    container.appendChild(createdElement);
    i++;
}

