window.addEventListener('load', () => {
    const baloonRef = document.getElementById('baloon');

    const blackState = {
        backgroundColor: 'black',
        width: 80,
    }

    console.log('blackState =', blackState)
    const bluekState = {
        backgroundColor: 'royalblue',
        width: 300,
    }

    let status = blackState;


    baloonRef.addEventListener('click', (event) => {
    if (status !== blackState) {
        status = blackState;
    } else {
        status = bluekState;
    }

    baloonRef.style.backgroundColor = status.backgroundColor;
    baloonRef.style.width = status.width + "px";
    })
})