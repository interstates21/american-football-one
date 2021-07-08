
// 
const boardElement = document.getElementById('board');

const staticBlocks = [
    {
        x: 1,
        y: 9,
    },
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const someBlocksIntersected = (x, y) => {
    // Compare every cell coordinate with all of the stored Static Blocks
    let i = 0;
    while (i < staticBlocks.length) {
        if (staticBlocks[i].x === x && staticBlocks[i].y === y) {
            return true;
        }
        i++;
    }

    return false;
}

const inRange = (x, y) => {
    if ((x >= 0 && x <= 9) && (y >= 0 && y <= 9)) {
        // Check intersections with Static Blocks
        if (!someBlocksIntersected(x, y)) {
            return true;
        }
    }

    return false;
}


const createBlock = (x, y, activeCellCoord) => {
    const blockElement = document.createElement('div');

    // Default block class
    blockElement.classList.add('block');

    // Active, lightblue cell
    // Check the current block, which we go throught in a loop, matches the activeCell pos
    if (x === activeCellCoord.x && y === activeCellCoord.y) {
        blockElement.classList.add('block-active');
    }
    // Check if one of the static blocks pos matches the current block
    // const isStaticBlock = someBlocksIntersected(x, y) RETURNS BOOLEAN
    else if (someBlocksIntersected(x, y)) {
        // Static purple cell which felt down
        blockElement.classList.add('block-static');
    }
    
    boardElement.appendChild(blockElement);
}

const renderGrid = (activeCellCoord) => {
    boardElement.innerHTML = '' // Clear the previous grid(frame)
    // every 0.5sec and redraw 100 cells with new positions

    let y = 0;

    while (y < 10) {
        let x = 0;
        while (x < 10) {
            createBlock(x, y, activeCellCoord);
            x++;
        }
        y++;
    }
}


// Main function is the main function of application


// Create a static html BOARD (10 x 10)
// Fill the board with 100 block (99 - empty, 1 - active)
// Create an active block coordinate. Appears always on top (y = 0), horizontal pos is random (x = random)
const main = () => {
    const activeCellCoord = {
        x: getRandomInt(10),
        y: 0
    }


    // Display the initial 99 empty, 1 active blocks
    renderGrid(activeCellCoord);


    // Make blocks fall
    window.setInterval(() => {
        // If activeBlock can move down
        if (inRange(activeCellCoord.x, activeCellCoord.y + 1)) {
            activeCellCoord.y++;
        }
        else {
            // Create another staticBlock when the activeBlock bumps into somethings
            staticBlocks.push({x: activeCellCoord.x, y: activeCellCoord.y});

            // Reset the position of empty block
            activeCellCoord.x = getRandomInt(9);
            activeCellCoord.y = 0;
        }

        renderGrid(activeCellCoord);
    }, 1000);

    // Listen to the arrow keys

    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            if (inRange(activeCellCoord.x - 1, activeCellCoord.y)) {
                activeCellCoord.x--;
            }
        }
        else if (event.key === 'ArrowRight') {
            if (inRange(activeCellCoord.x + 1, activeCellCoord.y)) {
                activeCellCoord.x++;
            }
        }
        else if (event.key === 'ArrowDown') {
            if (inRange(activeCellCoord.x, activeCellCoord.y + 1)) {
                activeCellCoord.y++;
            }
        }
        else if (event.key === 'ArrowUp') {
            if (inRange(activeCellCoord.x, activeCellCoord.y - 1)) {
                activeCellCoord.y--;
            }
        }
        renderGrid(activeCellCoord);
    })



}


main();