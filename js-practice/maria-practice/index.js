document.onreadystatechange = () => {
    const baloonRef = document.getElementById('baloon');

    const blackState = {
        // id: "black",
        backgroundColor: baloonRef.style.backgroundColor,
        width: parseInt(baloonRef.style.width),
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
}