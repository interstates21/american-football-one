
const boardElement = document.getElementById('board');

const createBlock = (isActive) => {
    const blockElement = document.createElement('div');
    blockElement.classList.add('block');

    if (isActive) {
        blockElement.classList.add('block-active');
    }
    
    boardElement.appendChild(blockElement);
}

const renderGrid = (activeCellCoord) => {
     boardElement.innerHTML = ''

    let y = 0;


    while (y < 10) {
        let x = 0;
        while (x < 10) {
            createBlock(x === activeCellCoord.x && y === activeCellCoord.y);
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
        activeCellCoord.y++;
        renderGrid(activeCellCoord);

        if (activeCellCoord.y >= 9) {
            clearInterval(intervalReference);
        }
    }, 500);

    // Listen to the arrow keys

    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            if (activeCellCoord.x > 0) {
                activeCellCoord.x--;
            }
        }
        else if (event.key === 'ArrowRight') {
            if (activeCellCoord.x < 9) {
                activeCellCoord.x++;
            }
        }


        renderGrid(activeCellCoord);
    })



}


main();