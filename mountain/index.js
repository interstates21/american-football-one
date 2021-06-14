const someElement = document.getElementById('some-id');

// const newElement = document.createElement('div');
// selectedParent.appendChild(newElement)

// someElement.addEventListener('click', () => {
//     do some stuff when this element has been clicked
// })

window.setTimeout(() => {
    const containerElement = document.getElementById('container')
    containerElement.innerHTML = "";
    console.dir(containerElement);

    let cities = ["Athens", "Moscow", "Kiev"]
    let i = 0
    while (i <= 2) {
        const newElement = document.createElement('p');
        newElement.innerHTML = cities[i];
        newElement.style.backgroundColor = "blue";
        newElement.style.fontSize = "32px";
        containerElement.appendChild(newElement);
        i = i + 1
    }


}, 2000)