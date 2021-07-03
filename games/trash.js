
const BlockFollowsMouse = () => {
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    window.setInterval(() => {
        if (mouseX < window.innerWidth / 2) {
            activeCellCoord.x--;
        }
        else if (mouseX >= window.innerWidth / 2) {
            activeCellCoord.x++;
        }
    
        // if (mouseY < window.innerHeight / 2) {
        //     activeCellCoord.y--;
        // }
        // else if (mouseY >= window.innerHeight / 2) {
        //     activeCellCoord.y++;
        // }
    
        renderGrid(activeCellCoord);
    
    }, 500)
}