
const boardElement = document.getElementById('board');

const activeCellCoord = {
    x: 5,
    y: 5
}

const createBlock = (isActive) => {
    const blockElement = document.createElement('div');
    blockElement.classList.add('block');

    if (isActive) {
        blockElement.classList.add('block-active');
    }
    
    boardElement.appendChild(blockElement);
}

const renderGrid = () => {
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
    renderGrid();
    

}


main();