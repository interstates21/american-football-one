


const createBlock = (x, y) => {
    const newElement = document.createElement('div');

    newElement.setAttribute('style', `
        width: 15px;
        height: 15px;
        background-color: blue;
        position: absolute;
        left: ${x}px;
        top: ${y}px;
    `);

    document.body.appendChild(newElement);
}

window.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
  

    createBlock(x, y);
})


// window.addEventListener('mousemove', (event) => {
//     createBlock(event.clientX, event.clientY);
// })