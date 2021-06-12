// Aim:
// Create a creature with changing parts
// When you click on a part, change the part to another part (select randomly from a picture list)

// - Get images
// - Store the image urls in an array (for getting a random image from it)
// - Create static html for Creature Container
// - Add click listener to each part
// - Get a random part from a corresponding array (head or body etc)
// - Update the part

const getRandomInt = (max) => {
    // Got from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * max);
}


const headParts = [
    './pics/head/p1.JPG',
    './pics/head/p2.JPG',
    './pics/head/p3.JPG',
]

const bodyParts = [
    './pics/body/r1.JPG',
    './pics/body/r2.JPG',
    './pics/body/r3.JPG',
]


const headElement = document.getElementById('head');
const bodyElement = document.getElementById('body');

let headIndex = 0;
headElement.addEventListener('click', () => {
    // % 3 - modulo operator - gives you a rest of division, keeps your value in range of 3 (0, 1 or 2);
    // headElement.style.background = `url("${headParts[headIndex % 3]}") center/cover`;
    // const headUrl = headParts[headIndex % 3];

    const randomIndex = getRandomInt(headParts.length);
    const headUrl = headParts[randomIndex];

    headElement.style.background = `url("${headUrl}") center/cover`;
    headIndex++;
})