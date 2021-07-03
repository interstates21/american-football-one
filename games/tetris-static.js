
const boardElement = document.getElementById('board');

const staticBlocks = [
    {
        x: 1,
        y: 9,
    },
    {
        x: 7,
        y: 9,
    },
    {
        x: 4,
        y: 9,
    },
    {
        x: 5,
        y: 9,
    },
]



  
const someBlocksIntersected = (x, y) => {
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
        // TODO: check intersections with staticBlock
        if (!someBlocksIntersected(x, y)) {
            return true;
        }
    }

    return false;

}


const createBlock = (x, y, activeCellCoord) => {
    const blockElement = document.createElement('div');
    blockElement.classList.add('block');

    if (x === activeCellCoord.x && y === activeCellCoord.y) {
        blockElement.classList.add('block-active');
    }
    else if (someBlocksIntersected(x, y)) {
        blockElement.classList.add('block-static');
    }
    
    boardElement.appendChild(blockElement);
}

const renderGrid = (activeCellCoord) => {
     boardElement.innerHTML = ''

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

const main = () => {
    const activeCellCoord = {
        x: 5,
        y: 0
    }

    renderGrid(activeCellCoord);


    // Make blocks fall
    const intervalReference = window.setInterval(() => {
        if (inRange(activeCellCoord.x, activeCellCoord.y + 1)) {
            activeCellCoord.y++;
            renderGrid(activeCellCoord);
        }
    }, 300);

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
        renderGrid(activeCellCoord);
    })



}


main();